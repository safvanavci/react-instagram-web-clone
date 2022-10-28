import ContentProfile from "../components/profile/ContentProfile";
import HeaderProfile from "../components/profile/HeaderProfile";
import StoryProfile from "../components/profile/StoryProfile";
import { Route, Routes } from "react-router-dom";
import ContentPosts from "../components/profile/ContentPosts";
import ContentSaved from "../components/profile/ContentSaved";
import ContentTagged from "../components/profile/ContentTagged";
import Footer from "../components/profile/Footer";

export default function Profile() {
  return (
    <div className='bg-brand w-screen '>
      <div className='w-[930px] mx-auto'>
        <HeaderProfile />
        <StoryProfile />
        <ContentProfile />
        <Routes>
          <Route path='posts' element={<ContentPosts />} />
          <Route path='saved' element={<ContentSaved />} />
          <Route path='tagged' element={<ContentTagged />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
