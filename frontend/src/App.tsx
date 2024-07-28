import { useAuth } from "@clerk/clerk-react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { MainLayout } from "./components";
import { NotFoundPage, SignInPage } from "./pages";
import { CourseContent } from "./pages/courses/course-content";
import CoursesPage from "./pages/courses/courses";
import CropAiPage from "./pages/crop-ai";
import Dashboard from "./pages/dashboard";
import { CommunityForum } from "./pages/forum/forum";
import CreateCropListing from "./pages/market/example-create";
import MarketItem from "./pages/market/item/MarketItem";
import MarketPage from "./pages/market/market";

const App: React.FC = () => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {isSignedIn && (
          <Route
            element={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/market/:id" element={<MarketItem />} />
            <Route path="/courses/:id" element={<CourseContent/>} />
            <Route path="/crop-ai" element={<CropAiPage />} />
            <Route path="/forum" element={<CommunityForum />} />
            <Route path="/example" element={<CreateCropListing />} />
          </Route>
        )}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignInPage />} />
        <Route
          path="/"
          element={
            isSignedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
