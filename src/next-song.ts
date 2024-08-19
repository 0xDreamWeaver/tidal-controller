import { showHUD } from "@raycast/api";
import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

import { runTidalCommand, getPreferences } from "./util/fn";

export default async function doNextSong() {
  await runTidalCommand(async () => {
    await closeMainWindow();
    await runAppleScript(`
      tell application "System Events"
        tell process "TIDAL"
          click menu item "Next" of menu "Playback" of menu bar 1
        end tell
      end tell`);
    if (getPreferences().showMessages) {
      await showHUD("Tidal: Next song ⏭️");
    }
  });
}
