import React, { Component } from 'react';
import { cn } from 'olymp';
import moment from 'moment';
import './slider.less';

const randomBetween = (start, end) => Math.floor(Math.random() * end) + start;
const getArrayOf = num => [...Array(num)].map((x, i) => i);
const randomFromDate = (start, end) => {
  const current = moment();
  const startOfYear = moment().startOf('year');
  const diffInDays = current.diff(startOfYear, 'days');
  let counter = start;
  for (let i = 0; true; i += 1) {
    if (counter > end) counter = start;
    if (i === diffInDays) return counter;
    counter += 1;
  }
};

const withState = WrappedComponent =>
  class SliderStateContainer extends Component {
    constructor(props) {
      super(props);
      const startAt = this.props.startAt &&
        typeof this.props.startAt === 'function'
        ? this.props.startAt(props)
        : this.props.startAt || 0;
      this.state = {
        currentImage: startAt,
      };
    }

    componentDidMount() {
      this.start();
    }

    componentWillUnmount() {
      this.unmount = true;
      this.stop();
    }

    start = () => {
      this.interval = this.props.interval &&
        typeof this.props.interval === 'function'
        ? this.props.interval()
        : this.props.interval || 4000;
      this.timer = setTimeout(this.toggleImage, this.interval);
      this.timer2 = setTimeout(
        this.toggleAnimating,
        this.props.animationDuration
      );
      // this.timer3 = setTimeout(this.progress, 10);
    };

    progress = () => {
      if (this.unmount) return;
      const total = this.dateStart ? this.interval : 0;
      const current = this.dateStart ? new Date() - this.dateStart : 0;
      const progress = Math.round(current / total * 100);
      if (progress === this.state.progress) {
        if (this.timer) this.timer3 = setTimeout(this.progress, 10);
        return;
      }
      this.setState({ progress });
      if (this.timer) this.timer3 = setTimeout(this.progress, 10);
    };

    stop = () => {
      if (this.timer) window.clearTimeout(this.timer);
      if (this.timer2) window.clearTimeout(this.timer2);
      if (this.timer3) window.clearTimeout(this.timer3);
      this.timer = null;
      this.timer2 = null;
      this.timer3 = null;
    };

    toggleAnimating = () => {
      if (this.unmount) return;
      this.setState({
        animating: false,
      });
    };

    toggleImage = newIndex => {
      if (this.unmount) return;
      const { children, slidesToShow } = this.props;
      let nextImage;
      if (typeof newIndex === 'number') nextImage = newIndex;
      else if (newIndex === 'previous') nextImage = this.getPrevious();
      else nextImage = this.getNext();
      this.stop();
      this.setState({
        currentImage: nextImage,
        animating: true,
        progress: 0,
      });
      this.dateStart = new Date();
      this.start();
    };

    getPrevious = index => {
      const { children, slidesToShow } = this.props;
      if (!children) return 0;
      const { currentImage } = this.state;
      if (index === undefined || typeof index !== 'number')
        index = currentImage;
      const newIndex = index - slidesToShow;
      return newIndex < 0 ? children.length + newIndex : newIndex;
    };

    getNext = index => {
      const { children, slidesToShow } = this.props;
      if (!children) return 0;
      const { currentImage } = this.state;
      if (index === undefined || typeof index !== 'number')
        index = currentImage;
      return (index + slidesToShow) % children.length;
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          getPrevious={this.getPrevious}
          toggleImage={this.toggleImage}
          start={this.start}
          stop={this.stop}
        />
      );
    }
  };

const Dots = ({ children, toggleImage, currentImage }) => {
  return (
    <div className="gz-slider-dots">
      {children &&
        children.map((x, i) =>
          <button
            key={i}
            onClick={() => toggleImage(i)}
            className={cn(
              'gz-slider-dot',
              currentImage === i && 'gz-slider-dot-active'
            )}
          >
            •
          </button>
        )}
    </div>
  );
};

const Arrows = ({ toggleImage }) => {
  return (
    <div className="gz-slider-arrows">
      <button
        className="gz-slider-arrow-l"
        onClick={() => toggleImage('previous')}
      >
        <i className="fa fa-chevron-left" />
      </button>
      <button className="gz-slider-arrow-r" onClick={() => toggleImage('next')}>
        <i className="fa fa-chevron-right" />
      </button>
    </div>
  );
};

const SingleSlider = props => {
  const {
    children,
    className,
    style,
    currentImage,
    animating,
    animationDuration,
    getPrevious,
    start,
    stop,
    progress,
  } = props;
  return (
    <div
      className={cn(className, 'gz-slider')}
      style={style}
      onMouseOver={stop}
      onMouseLeave={start}
    >
      <div>
        {children && children[animating ? getPrevious() : currentImage]}
      </div>
      {animating &&
        <div className="gz-slide fadeIn" style={{ animationDuration }}>
          {children[currentImage]}
        </div>}
      <Dots {...props} />
      <Arrows {...props} />
      {/*<Progress className="gz-slider-progress" strokeWidth={5} width={50} percent={progress} format={() => ''} />*/}
    </div>
  );
};

const MultiSlider = props => {
  const {
    children,
    innerClassName,
    className,
    style,
    currentImage,
    animating,
    slidesToShow,
    getPrevious,
    animationDuration,
    start,
    stop,
    progress,
  } = props;
  const images = getArrayOf(slidesToShow).map(
    x => (x + currentImage) % children.length
  );
  return (
    <div
      className={cn(className, 'gz-slider')}
      style={style}
      onMouseOver={stop}
      onMouseLeave={start}
    >
      {images.map(currentImage =>
        <div
          key={currentImage}
          className={cn(innerClassName, 'gz-slider-inner')}
        >
          <div>
            <div>
              {children &&
                children[animating ? getPrevious(currentImage) : currentImage]}
            </div>
            {animating &&
              <div className="gz-slide fadeIn" style={{ animationDuration }}>
                {children && children[currentImage]}
              </div>}
          </div>
        </div>
      )}
      <Dots {...props} />
      <Arrows {...props} />
      {/*<Progress className="gz-slider-progress" strokeWidth={5} width={50} percent={progress} format={() => ''} />*/}
    </div>
  );
};

@withState
export default class Slider extends Component {
  static defaultProps = {
    slidesToShow: 1,
    animationDuration: 2000,
    interval: () => randomBetween(3000, 7000),
    startAt: ({ children }) =>
      randomFromDate(0, !children ? 0 : children.length - 1),
  };
  render() {
    const { slidesToShow } = this.props;
    if (slidesToShow > 1) {
      return <MultiSlider {...this.props} />;
    } else if (slidesToShow === 1) {
      return <SingleSlider {...this.props} />;
    }
    return null;
  }
}
