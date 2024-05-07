import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Grid,
  Card,
  CardContent,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Box,
  Button
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChannelVideos } from '../../redux/actions/dashboardAction';
import UploadVideoModal from './UploadVideoModal';
import { addVideoData, deleteVideoDetails } from '../../redux/actions/videoAction';

// table
const columns = [
  { id: 'isPublished', label: 'Status', minWidth: 100 },
  { id: 'thumbnail', label: 'Thumbnail' },
  {
    id: 'description',
    label: 'Description',
    minWidth: 10,
    align: 'center',
    format: (value) => value.trim()
  },
  {
    id: 'likeCount',
    label: 'Like',
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'views',
    label: 'Views',
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'createdAt',
    label: 'Date uploaded',
    minWidth: 100,
    align: 'right',
    format: (value) => new Date(value).toLocaleDateString()
  },
  {
    id: 'action',
    label: 'Actions',
    minWidth: 10,
    align: 'right'
  }
];
const Collections = () => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const videos = useSelector((state) => state.dashboard.videosDetails);
  console.log('video raj', videos);

  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    dispatch(getAllChannelVideos());
  }, [dispatch]);

  useEffect(() => {
    setAllVideos(videos);
  }, [videos]);

  console.log('allvideo ', allVideos);

  const handleUploadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUploadSubmit = (formData) => {
    console.log('Form Data:', formData);
    dispatch(addVideoData(formData));
  };

  // delete video function

  const handleDeleteClick = (videoId) => {
    dispatch(deleteVideoDetails(videoId));
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Channel logo" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="outlined" onClick={handleUploadClick}>
              + Upload Video
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* section total like subscriber and videos  */}

      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Avatar sx={{ backgroundColor: '#2196f3', color: 'white' }}>
                <VisibilityIcon />
              </Avatar>
              <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                Total Views
              </Typography>
              <Typography variant="h1" sx={{ marginTop: 1 }}>
                20,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Avatar sx={{ backgroundColor: '#2196f3', color: 'white' }}>
                <PersonIcon />
              </Avatar>
              <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                Total Subscribers
              </Typography>
              <Typography variant="h1" sx={{ marginTop: 1 }}>
                60,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Avatar sx={{ backgroundColor: '#2196f3', color: 'white' }}>
                <FavoriteIcon />
              </Avatar>
              <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                Total Likes
              </Typography>
              <Typography variant="h1" sx={{ marginTop: 1 }}>
                80,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* table  */}
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '20px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {allVideos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'thumbnail') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <img src={value.url} alt="Thumbnail" style={{ width: '100px', height: 'auto' }} />
                          </TableCell>
                        );
                      } else if (column.id === 'isPublished') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value ? 'Published' : 'Unpublished'}
                          </TableCell>
                        );
                      } else if (column.id === 'action') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <IconButton aria-label="update">
                              <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => handleDeleteClick(row._id)}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value !== 'undefined' ? column.format(value) : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Use allVideos.length instead of rows.length */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={allVideos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Modal for uploading video */}
      <UploadVideoModal open={isModalOpen} onClose={handleCloseModal} onSubmit={handleUploadSubmit} />
    </div>
  );
};

export default Collections;
