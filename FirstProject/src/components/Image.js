import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  align-items: center;

`;
// const StyledImage = styled.Image`
//   background-color: ${({ theme }) => theme.imageBackground};
//   width: 500px;
//   height: 500px;
// `;

const BGImageContainer = styled.ImageBackground`
  width: 100%;
  height: 200px;
  // position: absolute;
  flex: 1;
`;

const Image = ({ url, imageStyle }) => {
  return (
      <BGImageContainer
        source={{ uri: url }}
        style={imageStyle}
        // resizeMode="stretch"
      />
  );
};

Image.propTypes = {
  uri: PropTypes.string,
  imageStyle: PropTypes.object,
};

export default Image;
