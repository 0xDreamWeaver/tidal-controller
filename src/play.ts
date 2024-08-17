import { showHUD } from "@raycast/api";
import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

import { runTidalCommand, getPreferences } from "./util/fn";

export default async function doPlay() {
    await runTidalCommand(async () => {
        // Close the main window
        await closeMainWindow();
        // Send play/pause command
        await runAppleScript(`tell application "System Events"
            tell process "TIDAL"
                if name of menu item 0 of menu "Playback" of menu bar 1 is "Play" then
                    click menu item "Play" of menu "Playback" of menu bar 1 
                end if
            end tell
        end tell`)
        if (getPreferences().showMessages) {
            await showHUD("Tidal: Music is now playing ▶️")
        }
    });
}