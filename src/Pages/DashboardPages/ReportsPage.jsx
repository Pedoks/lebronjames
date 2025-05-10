import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import { Box, Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const ReportsPage = () => {
  // Data for LeBron James Hate Trends (by year)
  const hateDataset = [
    { year: '2018', hateLevel: 75, event: 'Left Cleveland' },
    { year: '2019', hateLevel: 45, event: 'First Lakers Season' },
    { year: '2020', hateLevel: 32, event: 'NBA Championship' },
    { year: '2021', hateLevel: 48, event: 'First Round Exit' },
    { year: '2022', hateLevel: 57, event: 'Missed Playoffs' },
    { year: '2023', hateLevel: 42, event: 'Breaking Scoring Record' },
    { year: '2024', hateLevel: 38, event: 'Playing with Bronny' },
  ];

  // Value formatter for hate trend chart
  const barValueFormatter = (value) => `${value}%`;

  // Data for radar chart - LeBron's skills vs criticism areas
  const criticismDataset = [
    { 
      label: 'Critics Say', 
      data: [30, 80, 70, 90, 75, 65], 
      valueFormatter: (v) => `${v}%`,
      color: '#552583',
    },
    { 
      label: 'Actual Performance', 
      data: [95, 60, 85, 75, 90, 80], 
      valueFormatter: (v) => `${v}%`,
      color: '#FDB927',
    }
  ];

  // Controversial moments data for table
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'year', headerName: 'Year', width: 90 },
    { field: 'event', headerName: 'Event', width: 250 },
    { field: 'hateLevel', headerName: 'Criticism Level', width: 140 },
    { 
      field: 'impact', 
      headerName: 'Media Impact', 
      width: 120,
      renderCell: (params) => {
        let color;
        switch(params.value) {
          case 'High':
            color = '#ff4d4d';
            break;
          case 'Medium':
            color = '#ffa64d';
            break;
          case 'Low':
            color = '#70db70';
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
    { id: 1, year: '2010', event: '"The Decision" TV Special', hateLevel: '98%', impact: 'High' },
    { id: 2, year: '2011', event: 'NBA Finals Loss to Mavericks', hateLevel: '92%', impact: 'High' },
    { id: 3, year: '2018', event: 'Leaving Cleveland for Lakers', hateLevel: '75%', impact: 'High' },
    { id: 4, year: '2020', event: 'China Comments Controversy', hateLevel: '85%', impact: 'High' },
    { id: 5, year: '2021', event: 'Space Jam 2 Release', hateLevel: '62%', impact: 'Medium' },
    { id: 6, year: '2022', event: 'Missing Playoffs', hateLevel: '70%', impact: 'Medium' },
    { id: 7, year: '2023', event: 'Questioning COVID Vaccine', hateLevel: '78%', impact: 'Medium' },
    { id: 8, year: '2023', event: 'GOAT Debate Comments', hateLevel: '65%', impact: 'Low' },
    { id: 9, year: '2024', event: 'Playing with Son Bronny', hateLevel: '45%', impact: 'Medium' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#552583' }}>
        King's Reports
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: '#3a1c6b', marginBottom: '20px' }}>
        Analyzing LeBron James criticism trends and media narratives
      </Typography>

      <Grid container spacing={3}>
        {/* Bar Chart - LeBron Hate Trends */}
        <Grid item xs={12} md={6}>
          <Card sx={{ 
            height: '450px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(85, 37, 131, 0.2)'
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#552583', marginBottom: '10px' }}>
                LeBron James Criticism Trends
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', marginBottom: '20px' }}>
                Year-by-year analysis of media criticism levels
              </Typography>
              <Box sx={{ height: 350 }}>
                <BarChart
                  dataset={hateDataset}
                  xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
                  series={[
                    { 
                      dataKey: 'hateLevel', 
                      label: 'Criticism Level', 
                      valueFormatter: barValueFormatter,
                      color: '#552583'
                    }
                  ]}
                  slotProps={{
                    bar: {
                      highlightScope: {
                        highlighted: 'item',
                        faded: 'global'
                      }
                    }
                  }}
                  tooltip={{ trigger: 'item' }}
                  height={350}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Radar Chart - LeBron's Metrics vs Criticism */}
        <Grid item xs={12} md={6}>
          <Card sx={{ 
            height: '450px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(85, 37, 131, 0.2)'
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#552583', marginBottom: '10px' }}>
                Perception vs Reality
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', marginBottom: '20px' }}>
                How critics view LeBron vs his actual performance
              </Typography>
              <Box sx={{ height: 350, display: 'flex', justifyContent: 'center' }}>
                <RadarChart
                  height={350}
                  series={criticismDataset}
                  radar={{
                    metrics: ['Leadership', 'Clutch Play', 'Defense', 'Free Throws', 'Passing', 'Consistency'],
                    polarRadius: { min: 0, max: 100 },
                  }}
                  sx={{
                    '.MuiChartsLegend-root': {
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: '10px'
                    }
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Data Grid - Controversial Moments */}
        <Grid item xs={12}>
          <Card sx={{ 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(85, 37, 131, 0.2)',
            height: '400px'
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#552583', marginBottom: '10px' }}>
                LeBron's Most Criticized Moments
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
            <Typography variant="h6">Total Media Mentions</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FDB927' }}>143.2K</Typography>
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
            <Typography variant="h6">Positive Mentions</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FDB927' }}>62%</Typography>
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
            <Typography variant="h6">Critic Influence Score</Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FDB927' }}>7.8/10</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;