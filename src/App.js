
import React from 'react'
import { Toaster } from "react-hot-toast";
import Header from './Compounts/Header'
import Dashboard from './Compounts/Dashboard'
import HostelSelect from './Compounts/HostelSelect'
import AttendanceSummary from './Compounts/AttendanceSummary';
import NoticeBoard from './Compounts/NoticeBoard';
import ProfileCard from './Compounts/ProfileCard';
import FileUploader from './Compounts/FileUploader';
import DualForms from "./Compounts/DualForms";
import Footer from './Compounts/Footer';
import WardenSlider from './Compounts/WardenSlider';

export default function App() {
  return (
    <>
       <Header/>
       <Dashboard/>
       <HostelSelect/>
      <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <AttendanceSummary />
      <Toaster position="top-right" />
    </div>
    < NoticeBoard/>
    <ProfileCard/>
    <FileUploader/>
    <DualForms />
    <WardenSlider />
    <Footer/>

    </>
  )
}
