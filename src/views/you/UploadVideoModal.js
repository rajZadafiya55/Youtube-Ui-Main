/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Modal, Typography, TextField, Button, Box, FilledInput } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch } from 'react-redux';
import { addVideoData } from '../../redux/actions/videoAction';

const UploadVideoModal = ({ open, onClose, onSubmit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoFile: '',
    thumbnail: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const handleVideoChange = (e) => {
    setFormData({ ...formData, videoFile: e.target.files[0] });
    console.log('e.target.files', e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setFormData({ ...formData, thumbnail: e.target.files[0] });
  };

  console.log('video data ', formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.videoFile) {
      setErrors({ ...errors, videoFile: 'Video file is required' });
      return;
    }
    if (validateForm()) {
      onSubmit(formData);
      dispatch(addVideoData(formData));
      onClose();
      setFormData({
        title: '',
        description: '',
        videoFile: '',
        thumbnail: ''
      });
      setErrors({});
    }
  };

  const validateForm = () => {
    const newErrors = {};
    ['title', 'description'].forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (!formData['videoFile']) {
      newErrors['videoFile'] = `Video file is required`;
    }

    if (!formData['thumbnail']) {
      newErrors['thumbnail'] = `Thumbnail is required`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          maxHeight: '80vh',
          overflowY: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4
        }}
      >
        <Typography variant="h6" gutterBottom>
          Upload Video
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="Title"
            value={formData.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.title}
            helperText={errors.title}
          />
          <TextField
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.description}
            helperText={errors.description}
          />

          <Box
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40vh',
              bgcolor: '#f0f0f0'
            }}
          >
            <label htmlFor="videoFile" className="upload-label" style={{ textAlign: 'center' }}>
              <FilledInput
                id="videoFile"
                type="file"
                name="videoFile"
                fullWidth
                margin="normal"
                InputProps={{ className: 'hidden' }}
                onChange={handleVideoChange}
              />

              {/* <input id="file" type="file" name="videoFile" style={{ display: 'none' }} onChange={handleInputChange} /> */}
              {/* <CloudUploadIcon sx={{ fontSize: '3rem', marginBottom: '0.5rem' }} />
              <Typography variant="subtitle1" gutterBottom>
                <strong>Click to upload Video</strong> or drag and drop
              </Typography>
              <Typography variant="body2">MP4</Typography> */}
            </label>
          </Box>
          {errors.videoFile && <Typography color="error">{errors.videoFile}</Typography>}

          <Box mt={3}>
            <label htmlFor="thumbnail">
              <Typography variant="subtitle1" gutterBottom>
                Upload thumbnail
              </Typography>
            </label>
            <label htmlFor="thumbnail">
              <FilledInput
                id="thumbnail"
                type="file"
                name="thumbnail"
                fullWidth
                margin="normal"
                InputProps={{ className: 'hidden' }}
                onChange={handleThumbnailChange}
              />
            </label>

            <Typography variant="body2" mt={2} color="textSecondary">
              SVG, PNG, JPG or GIF
            </Typography>
          </Box>
          {errors.thumbnail && <Typography color="error">{errors.thumbnail}</Typography>}

          <div>
            <Button type="submit" variant="contained" sx={{ mr: 1, mt: 2 }}>
              Upload
            </Button>
            <Button variant="contained" onClick={onClose} sx={{ mr: 1, mt: 2 }}>
              Cancel
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default UploadVideoModal;
