import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Paper,
  Grid
} from '@mui/material';

// Mock data array with different action types will be replaced with api later
const stockDataArray = [
  {
    id: 1,
    symbol: 'TSLA',
    company: 'Tesla INC',
    price: 6279.36,
    changePercent: 0.83,
    actionType: 'Buy Now',
    targetPrice: 155,
    stopLoss: 155,
    potential: '+0.83%',
    risk: '+0.83%',
    analysis: 'Market conditions favor this position with strong technical indicators supporting the move',
    holdPeriod: '1 week'
  },
    {
    id: 2,
    symbol: 'TSLA',
    company: 'Tesla INC',
    price: 6279.36,
    changePercent: 0.83,
    actionType: 'Buy Now',
    targetPrice: 155,
    stopLoss: 155,
    potential: '+0.83%',
    risk: '+0.83%',
    analysis: 'Market conditions favor this position with strong technical indicators supporting the move',
    holdPeriod: '1 week'
  },
    {
    id: 3,
    symbol: 'TSA',
    company: 'Tesla INC',
    price: 6279.36,
    changePercent: 0.83,
    actionType: 'Buy Now',
    targetPrice: 155,
    stopLoss: 155,
    potential: '+0.83%',
    risk: '+0.83%',
    analysis: 'Market conditions favor this position with strong technical indicators supporting the move',
    holdPeriod: '1 week'
  },
      {
    id: 4,
    symbol: 'TSA',
    company: 'Tesla INC',
    price: 6279.36,
    changePercent: 0.83,
    actionType: 'Buy Now',
    targetPrice: 155,
    stopLoss: 155,
    potential: '+0.83%',
    risk: '+0.83%',
    analysis: 'Market conditions favor this position with strong technical indicators supporting the move',
    holdPeriod: '1 week'
  },
      {
    id: 5,
    symbol: 'TSA',
    company: 'Tesla INC',
    price: 6279.36,
    changePercent: 0.83,
    actionType: 'Buy Now',
    targetPrice: 155,
    stopLoss: 155,
    potential: '+0.83%',
    risk: '+0.83%',
    analysis: 'Market conditions favor this position with strong technical indicators supporting the move',
    holdPeriod: '1 week'
  },
    {
    id: 6,
    symbol: 'TSA',
    company: 'Tesla INC',
    price: 6279.36,
    changePercent: 0.83,
    actionType: 'Buy Now',
    targetPrice: 155,
    stopLoss: 155,
    potential: '+0.83%',
    risk: '+0.83%',
    analysis: 'Market conditions favor this position with strong technical indicators supporting the move',
    holdPeriod: '1 week'
  },
];

export default function TargetPriceTab() {
  return (
      <Box sx={{display:"flex",flexWrap:"wrap",gap:{xs:"30px", md:"10px"},justifyContent:"center"}}>
        {stockDataArray.map((stockData) => {
          const isPositive = stockData.changePercent > 0;
          
          return (
              <Paper key={stockData.id} component={Box}
                elevation={0}
                variant="outlined"
                sx={{
                  width: { xs:"90%", md:"32.3%",},
                  p: 1.5,
                  borderRadius: 2,
                  borderColor: 'grey.200',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5
                }}
              >
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold" color="text.primary" fontSize="0.875rem">
                        {stockData.symbol}
                      </Typography>
                      <Chip
                        label={stockData.actionType}
                        size="small"
                        sx={{
                          color: 'white',
                          fontSize: '0.7rem',
                          height: 20,
                          backgroundColor:'#31B275',
                          minWidth: 60
                        }}
                      />
                    </Box>
                    <Typography variant="caption" color="text.secondary" fontSize="0.75rem">
                      {stockData.company}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                    <Typography variant="subtitle2" fontWeight="bold" color="text.primary" fontSize="0.875rem">
                      {stockData.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      <Typography component="span" variant="caption" color="#000000" sx={{ ml: 0.25 }} fontSize="0.7rem">
                        USD
                      </Typography>
                    </Typography>
                    <Typography
                      variant="caption"
                      fontWeight="medium"
                      color={isPositive ? 'success.main' : 'error.main'}
                      fontSize="0.7rem"
                    >
                      {isPositive ? '+' : ''}{stockData.changePercent}% today
                    </Typography>
                  </Box>
                </Box>

                {/* Target Price and Stop Loss */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {/* Target Price */}
                  <Paper
                    elevation={0}
                    sx={{
                      flex: 1,
                      bgcolor: 'grey.50',
                      p: 1,
                      borderRadius: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.5
                    }}
                  >
                    <Typography variant="caption" fontWeight="bold" color="text.primary" fontSize="0.7rem">
                      Target Price
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" color="text.primary" fontSize="0.95rem">
                      ${stockData.targetPrice}
                    </Typography>
                    <Typography variant="caption" fontWeight="medium" color="success.main" fontSize="0.7rem">
                      {stockData.potential} Potential
                    </Typography>
                  </Paper>

                  {/* Stop Loss */}
                  <Paper
                    elevation={0}
                    sx={{
                      flex: 1,
                      bgcolor: 'grey.50',
                      p: 1,
                      borderRadius: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.5
                    }}
                  >
                    <Typography variant="caption" fontWeight="bold" color="text.primary" fontSize="0.7rem">
                      Stop Loss
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" color="text.primary" fontSize="0.95rem">
                      ${stockData.stopLoss}
                    </Typography>
                    <Typography variant="caption" fontWeight="medium" color="red" fontSize="0.7rem">
                      {stockData.risk} Risk
                    </Typography>
                  </Paper>
                </Box>

                {/* Analysis */}
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: 'grey.50',
                    p: 1,
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5
                  }}
                >
                  <Typography variant="caption" fontWeight="bold" color="text.primary" fontSize="0.7rem">
                    Analysis
                  </Typography>
                  <Typography variant="caption" color="text.secondary" fontSize="0.7rem" sx={{ lineHeight: 1.2 }}>
                    {stockData.analysis}
                  </Typography>
                </Paper>

                {/* Hold Period */}
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: 'grey.50',
                    p: 1,
                    borderRadius: 1
                  }}
                >
                  <Typography variant="caption" fontWeight="medium" color="#1C9079" fontSize="0.7rem">
                    Hold for {stockData.holdPeriod}
                  </Typography>
                </Paper>
              </Paper>
          );
        })}
      </Box>
  );
};