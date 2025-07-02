import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
    <Box sx={{
      width: '100%',
      height: theme => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      bgcolor: 'primary.main',
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Content
    </Box>
  )
}

export default BoardContent
