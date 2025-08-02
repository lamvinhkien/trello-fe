import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  borderRadius: '5px',
  px: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

const BoardBar = ({ board }) => {
  return (
    <Box sx={{
      width: '100%',
      height: theme => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 2,
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            icon={<DashboardIcon />}
            label={board?.title}
            sx={MENU_STYLES}
            onClick={() => { }}
          />
        </Tooltip>
        <Chip
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          sx={MENU_STYLES}
          onClick={() => { }}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to Drive"
          sx={MENU_STYLES}
          onClick={() => { }}
        />
        <Chip
          icon={<BoltIcon />}
          label="Automation"
          sx={MENU_STYLES}
          onClick={() => { }}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          sx={MENU_STYLES}
          onClick={() => { }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={6}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 35,
              height: 35,
              fontSize: 15,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="lamvinhkien">
            <Avatar alt="lamvinhkien" src="src/assets/with-bezau-1.JPG" />
          </Tooltip>
          <Tooltip title="lamvinhkien">
            <Avatar alt="lamvinhkien" src="src/assets/with-bezau-1.JPG" />
          </Tooltip>
          <Tooltip title="lamvinhkien">
            <Avatar alt="lamvinhkien" src="src/assets/with-bezau-1.JPG" />
          </Tooltip>
          <Tooltip title="lamvinhkien">
            <Avatar alt="lamvinhkien" src="src/assets/with-bezau-1.JPG" />
          </Tooltip>
          <Tooltip title="lamvinhkien">
            <Avatar alt="lamvinhkien" src="src/assets/with-bezau-1.JPG" />
          </Tooltip>
          <Tooltip title="lamvinhkien">
            <Avatar alt="lamvinhkien" src="src/assets/with-bezau-1.JPG" />
          </Tooltip>
          <Tooltip title="lamvinhkien">
            <Avatar alt="lamvinhkien" src="src/assets/with-bezau-1.JPG" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
