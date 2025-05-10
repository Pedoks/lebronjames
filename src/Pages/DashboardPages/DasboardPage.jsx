import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Card, CardContent, Grid, Paper } from '@mui/material';

function Dashboard() {
  // Sample data for BarChart
  const barChartData = {
    xAxis: [{ 
      scaleType: 'band',
      data: ['LeBron Fans', 'LeBron Haters']
    }],
    series: [
      {
        data: [85, 35],
        color: '#FDB927', // Lakers gold
      }
    ]
  };

  // Sample data for PieChart
  const pieChartData = {
    series: [
      {
        data: [
          { id: 0, value: 65, label: 'LeBron Fans', color: '#FDB927' }, // Lakers gold
          { id: 1, value: 25, label: 'LeBron Haters', color: '#552583' }, // Lakers purple
          { id: 2, value: 10, label: 'Neutral', color: '#3a1c6b' }, // Darker purple
        ],
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, color: 'gray' },
      },
    ],
    height: 300,
  };

  // Sample data for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'location', headerName: 'Location', width: 130 },
    { field: 'joinDate', headerName: 'Join Date', width: 130 },
    { 
      field: 'fanLevel', 
      headerName: 'Fan Level', 
      width: 120,
      renderCell: (params) => {
        let color;
        switch(params.value) {
          case 'Die Hard':
            color = '#FDB927'; // Gold
            break;
          case 'Enthusiast':
            color = '#552583'; // Purple
            break;
          case 'Casual':
            color = '#3a1c6b'; // Dark purple
            break;
          default:
            color = 'gray';
        }
        return (
          <Box 
            sx={{ 
              backgroundColor: color, 
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            {params.value}
          </Box>
        );
      }
    },
  ];

  const rows = [
    { id: 1, username: 'KingJamesSTAN', location: 'Los Angeles, CA', joinDate: '2020-05-12', fanLevel: 'Die Hard' },
    { id: 2, username: 'LALaker4Life', location: 'Cleveland, OH', joinDate: '2018-11-03', fanLevel: 'Die Hard' },
    { id: 3, username: 'BronBronFan23', location: 'Miami, FL', joinDate: '2021-07-22', fanLevel: 'Enthusiast' },
    { id: 4, username: 'LakeShow2020', location: 'Chicago, IL', joinDate: '2020-01-15', fanLevel: 'Enthusiast' },
    { id: 5, username: 'JamesGang', location: 'New York, NY', joinDate: '2019-09-28', fanLevel: 'Die Hard' },
    { id: 6, username: 'BronnyJrFan', location: 'Toronto, CA', joinDate: '2022-04-18', fanLevel: 'Casual' },
    { id: 7, username: 'TheChosen1', location: 'Akron, OH', joinDate: '2017-12-30', fanLevel: 'Die Hard' },
    { id: 8, username: 'RingChaser', location: 'Phoenix, AZ', joinDate: '2021-02-14', fanLevel: 'Casual' },
    { id: 9, username: 'LeBronMVP', location: 'Boston, MA', joinDate: '2023-01-05', fanLevel: 'Enthusiast' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#552583' }}>
        LeBron Fans Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: '#3a1c6b', marginBottom: '20px' }}>
        Tracking King James' global impact and fanbase
      </Typography>

      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ 
            height: '400px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(85, 37, 131, 0.2)'
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#552583', marginBottom: '10px' }}>
                LeBron Fans vs Haters
              </Typography>
              <Box sx={{ height: 300 }}>
                <BarChart
                  xAxis={barChartData.xAxis}
                  series={barChartData.series}
                  height={300}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ 
            height: '400px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(85, 37, 131, 0.2)'
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#552583', marginBottom: '10px' }}>
                Fan Sentiment Distribution
              </Typography>
              <Box sx={{ height: 300, display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={pieChartData.series}
                  height={300}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  slotProps={{
                    legend: { hidden: false }
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Data Grid - User List */}
        <Grid item xs={12}>
          <Card sx={{ 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(85, 37, 131, 0.2)',
            height: '400px'
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#552583', marginBottom: '10px' }}>
                LeBron Fans
              </Typography>
              <Box sx={{ height: 330, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  disableRowSelectionOnClick
                  sx={{
                    '& .MuiDataGrid-columnHeader': {
                      backgroundColor: '#552583',
                      color: 'white',
                    },
                    '& .MuiDataGrid-row:nth-of-type(even)': {
                      backgroundColor: 'rgba(253, 185, 39, 0.1)',
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Stats Summary Cards */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ 
            p: 3, 
            textAlign: 'center', 
            background: 'linear-gradient(to right, #552583, #3a1c6b)',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}>
            <Typography variant="h6">Total Fans</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FDB927' }}>200.6M</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ 
            p: 3, 
            textAlign: 'center', 
            background: 'linear-gradient(to right, #552583, #3a1c6b)',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}>
            <Typography variant="h6">Fan Growth</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FDB927' }}>+6.8%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ 
            p: 3, 
            textAlign: 'center', 
            background: 'linear-gradient(to right, #552583, #3a1c6b)',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}>
            <Typography variant="h6">King's Approval</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FDB927' }}>87%</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;