import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/index'

const AppBar = () => {
  return (
    <Box sx={{
      width: '100%',
      height: theme => theme.trello.appBarHeight,
      bgcolor: 'primary.light',
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar
