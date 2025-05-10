import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Tabs, 
  Tab, 
  TextField, 
  InputAdornment
} from '@mui/material';
import { Search, ThumbUp, ThumbDown, People } from '@mui/icons-material';

const UsersPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Common columns for both tables
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 130,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 130,
      editable: true,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 150,
      editable: true,
    },
    {
      field: 'joinDate',
      headerName: 'Join Date',
      width: 110,
      editable: false,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 80,
      editable: true,
    },
    {
      field: 'favoriteTeam',
      headerName: 'Favorite Team',
      width: 130,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => {
        const isActive = params.value === 'Active';
        return (
          <Box 
            sx={{ 
              backgroundColor: isActive ? '#4caf50' : '#ff9800', 
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            {params.value}
          </Box>
        );
      },
    },
  ];

  // Sample data - LeBron Fans
  const lebronFans = [
    { 
      id: 1, 
      firstName: 'James', 
      lastName: 'Wilson', 
      age: 28, 
      location: 'Los Angeles, CA', 
      joinDate: '2022-05-15',
      favoriteTeam: 'Lakers',
      status: 'Active' 
    },
    { 
      id: 2, 
      firstName: 'Sarah', 
      lastName: 'Johnson', 
      age: 34, 
      location: 'Cleveland, OH', 
      joinDate: '2020-11-23',
      favoriteTeam: 'Cavaliers',
      status: 'Active' 
    },
    { 
      id: 3, 
      firstName: 'Michael', 
      lastName: 'Brown', 
      age: 42, 
      location: 'Miami, FL', 
      joinDate: '2019-07-08',
      favoriteTeam: 'Heat',
      status: 'Active' 
    },
    { 
      id: 4, 
      firstName: 'Jessica', 
      lastName: 'Davis', 
      age: 25, 
      location: 'Akron, OH', 
      joinDate: '2021-03-19',
      favoriteTeam: 'Lakers',
      status: 'Active' 
    },
    { 
      id: 5, 
      firstName: 'David', 
      lastName: 'Martinez', 
      age: 31, 
      location: 'New York, NY', 
      joinDate: '2023-01-05',
      favoriteTeam: 'Lakers',
      status: 'Inactive' 
    },
    { 
      id: 6, 
      firstName: 'Emily', 
      lastName: 'Taylor', 
      age: 29, 
      location: 'Chicago, IL', 
      joinDate: '2022-09-12',
      favoriteTeam: 'Lakers',
      status: 'Active' 
    },
    { 
      id: 7, 
      firstName: 'Anthony', 
      lastName: 'Thompson', 
      age: 37, 
      location: 'Toronto, Canada', 
      joinDate: '2020-08-30',
      favoriteTeam: 'Cavaliers',
      status: 'Active' 
    },
  ];

  // Sample data - LeBron Critics
  const lebronCritics = [
    { 
      id: 1, 
      firstName: 'Robert', 
      lastName: 'Anderson', 
      age: 45, 
      location: 'Boston, MA', 
      joinDate: '2021-06-22',
      favoriteTeam: 'Celtics',
      status: 'Active' 
    },
    { 
      id: 2, 
      firstName: 'Thomas', 
      lastName: 'Miller', 
      age: 38, 
      location: 'San Francisco, CA', 
      joinDate: '2022-12-01',
      favoriteTeam: 'Warriors',
      status: 'Active' 
    },
    { 
      id: 3, 
      firstName: 'Jennifer', 
      lastName: 'White', 
      age: 33, 
      location: 'Chicago, IL', 
      joinDate: '2023-02-14',
      favoriteTeam: 'Bulls',
      status: 'Inactive' 
    },
    { 
      id: 4, 
      firstName: 'Carlos', 
      lastName: 'Garcia', 
      age: 29,
      location: 'Phoenix, AZ', 
      joinDate: '2021-10-05',
      favoriteTeam: 'Suns',
      status: 'Active' 
    },
    { 
      id: 5, 
      firstName: 'Rebecca', 
      lastName: 'Lewis', 
      age: 41, 
      location: 'Dallas, TX', 
      joinDate: '2020-05-19',
      favoriteTeam: 'Mavericks',
      status: 'Active' 
    },
  ];

  // Sample data - Regular Users
  const regularUsers = [
    { 
      id: 1, 
      firstName: 'Kevin', 
      lastName: 'Clark', 
      age: 32, 
      location: 'Seattle, WA', 
      joinDate: '2021-08-17',
      favoriteTeam: 'SuperSonics',
      status: 'Active' 
    },
    { 
      id: 2, 
      firstName: 'Olivia', 
      lastName: 'Moore', 
      age: 27, 
      location: 'Portland, OR', 
      joinDate: '2022-04-09',
      favoriteTeam: 'Trail Blazers',
      status: 'Inactive' 
    },
    { 
      id: 3, 
      firstName: 'William', 
      lastName: 'Walker', 
      age: 39, 
      location: 'Memphis, TN', 
      joinDate: '2023-03-25',
      favoriteTeam: 'Grizzlies',
      status: 'Active' 
    },
    { 
      id: 4, 
      firstName: 'Sophia', 
      lastName: 'Hall', 
      age: 30, 
      location: 'Denver, CO', 
      joinDate: '2020-10-12',
      favoriteTeam: 'Nuggets',
      status: 'Active' 
    },
    { 
      id: 5, 
      firstName: 'Daniel', 
      lastName: 'Young', 
      age: 35, 
      location: 'Philadelphia, PA', 
      joinDate: '2022-01-30',
      favoriteTeam: '76ers',
      status: 'Active' 
    },
    { 
      id: 6, 
      firstName: 'Emma', 
      lastName: 'Adams', 
      age: 26, 
      location: 'Atlanta, GA', 
      joinDate: '2023-05-03',
      favoriteTeam: 'Hawks',
      status: 'Inactive' 
    },
  ];

  // Get current data based on tab
  const getCurrentData = () => {
    let data;
    switch(tabValue) {
      case 0:
        data = lebronFans;
        break;
      case 1:
        data = lebronCritics;
        break;
      case 2:
        data = regularUsers;
        break;
      default:
        data = [];
    }

    // Apply search filter if there's a query
    if (searchQuery) {
      return data.filter(row => 
        Object.values(row).some(value => 
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    return data;
  };

  // Get tab-specific styles
  const getTabStyle = (index) => {
    let color;
    switch(index) {
      case 0:
        color = '#FDB927'; // Lakers gold for fans
        break;
      case 1:
        color = '#552583'; // Lakers purple for critics
        break;
      case 2:
        color = '#3a1c6b'; // Darker purple for regular users
        break;
      default:
        color = 'grey';
    }
    
    return {
      backgroundColor: tabValue === index ? color : 'transparent',
      color: tabValue === index ? 'white' : 'inherit',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      '&:hover': {
        backgroundColor: tabValue === index ? color : 'rgba(0,0,0,0.04)',
      }
    };
  };

  // Stats information based on tab
  const getStatsInfo = () => {
    switch(tabValue) {
      case 0:
        return {
          title: 'LeBron Fans',
          count: lebronFans.length,
          activeCount: lebronFans.filter(user => user.status === 'Active').length,
          icon: <ThumbUp sx={{ fontSize: 40, color: '#FDB927' }} />,
          color: '#FDB927'
        };
      case 1:
        return {
          title: 'LeBron Critics',
          count: lebronCritics.length,
          activeCount: lebronCritics.filter(user => user.status === 'Active').length,
          icon: <ThumbDown sx={{ fontSize: 40, color: '#552583' }} />,
          color: '#552583'
        };
      case 2:
        return {
          title: 'Regular Users',
          count: regularUsers.length,
          activeCount: regularUsers.filter(user => user.status === 'Active').length,
          icon: <People sx={{ fontSize: 40, color: '#3a1c6b' }} />,
          color: '#3a1c6b'
        };
      default:
        return {
          title: 'Users',
          count: 0,
          activeCount: 0,
          icon: null,
          color: 'grey'
        };
    }
  };

  const statsInfo = getStatsInfo();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#552583' }}>
        Lakers Nation
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: '#3a1c6b', marginBottom: '20px' }}>
        User management and analytics
      </Typography>

      <Grid container spacing={3}>
        {/* User Stats Card */}
        <Grid item xs={12}>
          <Card sx={{ 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
            borderRadius: '12px',
            border: `1px solid ${statsInfo.color}`,
            overflow: 'hidden'
          }}>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              backgroundColor: statsInfo.color,
              padding: '16px 24px',
              color: 'white'
            }}>
              {statsInfo.icon}
              <Box sx={{ ml: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {statsInfo.title}
                </Typography>
                <Typography variant="body2">
                  User Statistics
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center', padding: 2 }}>
                    <Typography variant="h6" color="text.secondary">Total Users</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', color: statsInfo.color }}>{statsInfo.count}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center', padding: 2 }}>
                    <Typography variant="h6" color="text.secondary">Active Users</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', color: statsInfo.color }}>{statsInfo.activeCount}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center', padding: 2 }}>
                    <Typography variant="h6" color="text.secondary">Activity Rate</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', color: statsInfo.color }}>
                      {Math.round((statsInfo.activeCount / statsInfo.count) * 100)}%
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Main User Data Grid */}
        <Grid item xs={12}>
          <Card sx={{ 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(85, 37, 131, 0.2)',
            overflow: 'hidden'
          }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange}
                variant="fullWidth"
                textColor="inherit"
                indicatorColor="primary"
              >
                <Tab label="LeBron Fans" sx={getTabStyle(0)} />
                <Tab label="LeBron Critics" sx={getTabStyle(1)} />
                <Tab label="Regular Users" sx={getTabStyle(2)} />
              </Tabs>
            </Box>
            
            <Box sx={{ p: 3 }}>
              {/* Search Bar */}
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search users..."
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              
              {/* DataGrid */}
              <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={getCurrentData()}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  sx={{
                    '& .MuiDataGrid-columnHeader': {
                      backgroundColor: statsInfo.color,
                      color: 'white',
                    },
                    '& .MuiDataGrid-row:nth-of-type(even)': {
                      backgroundColor: `rgba(${statsInfo.color === '#FDB927' ? '253, 185, 39' : '85, 37, 131'}, 0.1)`,
                    },
                  }}
                />
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UsersPage;