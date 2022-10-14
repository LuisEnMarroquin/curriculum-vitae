import { ReactElement } from "react"
import { Select, MenuItem, FormControl } from "@material-ui/core"

interface ISelectLang {
  language: number
  change: Function
}

function SelectLang({ language, change }: ISelectLang): ReactElement {
  return (
    <div id="selectLang">
      <FormControl fullWidth>
        <Select value={language} variant="outlined" onChange={(e) => change(Number(e.target.value))} inputProps={{ "aria-label": "Change language" }}>
          <MenuItem value={1}>English</MenuItem>
          <MenuItem value={2}>Español</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectLang
