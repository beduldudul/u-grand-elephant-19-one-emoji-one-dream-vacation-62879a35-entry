// One Emoji, One Dream Vacation — a single emoji, the trip of my dreams.
// A hot air balloon drifting over Cappadocia at sunrise: the postcard
// every stranger wants to book. One emoji, nothing else, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🎈";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
