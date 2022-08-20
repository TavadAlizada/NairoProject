import * as React from "react";
import { CursorContext } from "./Cursor";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const BlogModalProvider = React.createContext();

export default function BlogModalContext(props) {
  const cursorEvent = React.useContext(CursorContext);
  const [open, setOpen] = React.useState(false);
  const [getContent, setContent] = React.useState({
    img: "",
    name: "",
    date: "",
    title: "",
    blogImg: "",
  });

  const handleClickOpen = (content) => {
    setContent({
      img: content.img,
      name: content.name,
      date: content.date,
      title: content.titleModal,
      blogImg: content.blogImg,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <div className="closeModal">
            <i className="fas fa-times"></i>
          </div>
          <div className="box">
            <div className="img">
              <img src={getContent.img} />
            </div>
            <div className="content">
              <h2>{getContent.title}</h2>
            </div>
            <div className="about">
              <div className="miniImg">
                <img src={getContent.blogImg} alt="" />
              </div>
              <div className="name">
                <h5>{getContent.name}</h5>
                <span>{getContent.date}</span>
              </div>
            </div>
            <div className="modalLine"></div>
            <div className="text">
              <p>
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem. Adipiscing veni amet luctus enim
                sem libero tellus viverra venenatis aliquam. Commodo natoque
                quam pulvinar elit.
              </p>
              <p>
                Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
                pretium metus nullam quam aenean sociis quis sem neque vici
                libero. Venenatis nullam fringilla pretium magnis aliquam nunc
                vulputate integer augue ultricies cras. Eget viverra feugiat
                cras ut. Sit natoque montes tempus ligula eget vitae pede
                rhoncus maecenas consectetuer commodo condimentum aenean.
              </p>
            </div>
            <div className="aboutContent">
              <h2>What are my payment options?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </h4>
              <span>
                Someone famous in{" "}
                <i>
                  <b>Dick Grayson</b>
                </i>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="button">
                <button>Design</button>
                <button>Development</button>
                <button>Travel</button>
                <button>Web Design</button>
                <button>Marketing</button>
                <button>Research</button>
                <button>Managment</button>
              </div>
              <div className="form">
                <h5>Leave a Reply</h5>
                <form action="">
                  <div className="row">
                    <input type="text" placeholder="Full name" />
                    <input type="mail" placeholder="Email address" />
                  </div>
                  <div className="column">
                    <input type="text" placeholder="Subject" />
                    <textarea
                      name=""
                      id=""
                      cols="20"
                      rows="10"
                      placeholder="Type Comment"
                    ></textarea>
                    <button
                      onMouseOver={() => cursorEvent.setCursor(true)}
                      onMouseOut={() => cursorEvent.setCursor(false)}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
      <BlogModalProvider.Provider value={{ handleClickOpen }}>
        {props.children}
      </BlogModalProvider.Provider>
    </>
  );
}
