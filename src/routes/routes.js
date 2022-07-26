import Home from "~/page/Home";
import Following from "~/page/Following";
import Profile from "~/page/Profile";
import Upload from "~/page/Upload";
import Search from "~/page/Search";

import config from "~/config";

import { HeaderOnly } from "~/layouts";

// Public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
]

// Private Routes
const privateRoutes = []

export { publicRoutes, privateRoutes };