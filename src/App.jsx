import { useColorScheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'

function App() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="dark-light-mode-label">Mode</InputLabel>
        <Select
          labelId="dark-light-mode-label"
          id="dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value='light'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <LightModeIcon fontSize='small' />
              <div>
                Light
              </div>
            </div>
          </MenuItem>
          <MenuItem value='dark'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <DarkModeOutlinedIcon fontSize='small' />
              <div>
                Dark
              </div>
            </div>
          </MenuItem>
          <MenuItem value='system'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <SettingsBrightnessOutlinedIcon fontSize='small' />
              <div>
                System
              </div>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default App
