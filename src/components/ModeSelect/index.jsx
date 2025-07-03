import { useColorScheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'
import Box from '@mui/material/Box'

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ minWidth: 128 }} size="small">
      <InputLabel id="dark-light-mode-label">Mode</InputLabel>
      <Select labelId="dark-light-mode-label" id="dark-light-mode" value={mode} label="Mode" onChange={handleChange}>
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <LightModeIcon sx={{ fontSize: '1.2rem' }} />
            <Box sx={{ fontSize: '1rem' }}>
              Light
            </Box>
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon sx={{ fontSize: '1.2rem' }} />
            <Box sx={{ fontSize: '1rem' }}>
              Dark
            </Box>
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <SettingsBrightnessOutlinedIcon sx={{ fontSize: '1.2rem' }} />
            <Box sx={{ fontSize: '1rem' }}>
              System
            </Box>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
