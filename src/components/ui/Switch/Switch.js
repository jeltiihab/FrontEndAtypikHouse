import React, {useState} from 'react'
import { Switch } from '@headlessui/react'
import styles from "./switch.module.css"

export default function SwitchOption() {

    const [enabled, setEnabled] = useState(false)

    return (
        <div>
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? styles.switchenabled : styles.switchdisabled}`}
          >{`${enabled ? "Désactivé" : "Active"}`}
        </Switch>
      </div>
    )
}
