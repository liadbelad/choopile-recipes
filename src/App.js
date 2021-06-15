import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import MainNavbar from "./componenets/Navbar/MainNavbar"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"
import Sidebar from "./componenets/Sidebar/Sidebar"
function App() {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModel = () => setShowModal(true)
  const handleCloseModel = () => setShowModal(false)

  const handleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal)
  }

  return (
    <Router>
      <MainNavbar />
      {/* <Sidebar
        showSidebar={showSidebar}
        handleShowSidenav={handleShowSidenav}
      /> */}
      <main className="py-5">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>

        {/* {showModal && (
          <ModalForm handleCloseModel={handleCloseModel} showModal={showModal}>
            {modalContent === "newStudent" ? (
              <NewStudentForm onNewStudentData={onNewStudentData} />
            ) : (
              <StudentDetails student={studentDetailsModal} />
            )}
          </ModalForm>
        )} */}
      </main>
    </Router>
  )
}

export default App
