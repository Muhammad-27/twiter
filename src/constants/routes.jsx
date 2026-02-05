import BookmarksPage from "../pages/Bookmarks/BookmarksPage";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import ListsPage from "../pages/ListsPage";
import MessagesPage from "../pages/MessagesPage/MessagesPage";
import MorePage from "../pages/MorePage";
import NotificationsPage from "../pages/Notifications/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";

export const routes = [
    {
        id:1,
        path:'/',
        element:<HomePage/>
    },
    {
        id:2,
        path:'explore',
        element:<ExplorePage/>
    },
    {
        id:3,
        path:'/notifications',
        element:<NotificationsPage/>
    },
    {
        id:4,
        path:"/messages",
        element:<MessagesPage/>
    },
    {
        id:5,
        path:'/bookmarks',
        element:<BookmarksPage/>
    },
    {
        id:6,
        path:'/lists',
        element:<ListsPage/>
    },
    {
        id:7,
        path:'/profile',
        element:<ProfilePage/>
    },
    {
        id:8,
        path:'/more',
        element:<MorePage/>
    }
]