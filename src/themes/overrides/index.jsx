import { merge } from "lodash";
import Badge from "./Badge";
import IconButton from "./IconButton";
import LinearProgress from "./LinearProgress";
import Tab from "./Tab";
import Tabs from "./Tabs";
import OutlinedInput from './OutlinedInput';

export default function ComponentsOverrides(theme) {
  return merge(
    Badge(theme),
    IconButton(theme),
    LinearProgress(),
    Tabs(),
    OutlinedInput(theme),
    Tab(theme)
  );
}
