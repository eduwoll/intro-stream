import React, { useEffect } from "react";
import PropTypes from "prop-types";
import anime from "animejs";
import Header from "@/layouts/components/Header";

const DefaultLayout = ({ background, children, contentClass }) => {
  useEffect(() => {
    anime({
      targets: "#inscreva-se",
      loop: true,
      scale: [
        { value: 0.7, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1500 },
      ],
    });
  }, []);
  const styleBackground = undefined;
  return (
    <div>
      <div className="text-gray-900">
        <div className="h-screen bg-right bg-cover" style={styleBackground}>
          <Header />
          <div
            className={`container px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center ${contentClass}`}
          >
            {children}
            <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
              &copy; {new Date().getFullYear()}
              {" - "}
              <a
                href="https://sinhnt.com"
                target="_blank"
                className="text-success"
              >
                sinhnt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
  contentClass: PropTypes.string,
};

DefaultLayout.defaultProps = {
  background: true,
  contentClass: "",
};

export default DefaultLayout;
