/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";
import { findByCodeLazy } from "@webpack";

const updateAsync = findByCodeLazy("updateAsync", "status");

export default definePlugin({
    name: "AlwaysStartInvisible",
    description: "Sets your status to Invisible upon Discord shutdown.",
    authors: [
        {
            id: 835582393230164018n,
            name: "h.helix",
        }
    ],
    start() {
        window.addEventListener("beforeunload", setInvisibleOnShutdown);
    },
    stop() {
        window.removeEventListener("beforeunload", setInvisibleOnShutdown);
    }
});

function setInvisibleOnShutdown() {
    updateAsync("invisible");
}
