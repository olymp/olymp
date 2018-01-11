import { message } from 'antd';
import { withPropsOnChange } from 'recompose';

export default withPropsOnChange(
  ['uploading', 'cloudinaryRequest', 'folder', 'tags'],
  ({
    cloudinaryRequest,
    done,
    folder: folder2,
    tags,
    refetchKey,
    setUploading,
    uploading,
    setSelection,
    addSelection,
  }) => {
    const saveProgress = file =>
      setUploading([
        ...uploading.filter(x => x.name !== file.name),
        {
          name: file.name,
          percent: file.percent,
          size: file.size,
          status: file.status,
          response: file.response,
        },
      ]);

    if (!cloudinaryRequest) {
      return {};
    }

    const { apiKey, signature, timestamp, url, folder } = cloudinaryRequest;
    return {
      upload: {
        showUploadList: false,
        multiple: true,
        data: {
          api_key: apiKey,
          signature,
          timestamp,
          folder,
        },
        action: url,
        beforeUpload: () => {
          setSelection([]);
        },
        onChange: ({ file }) => {
          if (file.status === 'uploading' && file.percent < 100) {
            // save upload-state to state
            saveProgress(file);
          } else if (file.status === 'done') {
            // Write data in DB
            const response = { ...file.response };
            response.id = response.public_id;
            done({
              id: response.id,
              token: signature,
              tags,
              folder: folder2
                ? folder2
                    .split('/')
                    .filter((x, i) => i !== 0)
                    .join('/')
                : null,
            }).then(({ data }) => {
              if (data && data.cloudinaryRequestDone) {
                addSelection(data.cloudinaryRequestDone.id);
                refetchKey();

                // show message if a file uploaded
                saveProgress(file);
                message.success(`${file.name} erfolgreich hochgeladen.`);
              }
              // remove file from uploading
              setUploading(uploading.filter(x => x.name !== file.name));
            });
          } else if (file.status === 'error') {
            console.log('error');
            message.error(`${file.name} file upload failed.`);
          }
        },
      },
    };
  },
);
