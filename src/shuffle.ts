import { showHUD } from "@raycast/api";
import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

import { runTidalCommand, getPreferences } from "./util/fn";

export default async function doShuffle() {
    await runTidalCommand(async () => {
        // Close the main window
        await closeMainWindow();
        // Send shuffle command
        await runAppleScript(`tell application "System Events"
            tell process "TIDAL"
                click menu item "Shuffle" of menu "Playback" of menu bar 1
            end tell
        end tell`)
        if (getPreferences().showMessages) {
            await showHUD("Tidal: Shuffle toggled 🔀")
        }
    });
}
