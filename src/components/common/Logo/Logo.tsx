import React from "react";
import { SvgXml } from "react-native-svg";

interface LogoProps {
  size: number;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { size } = props;
  const svgMarkup = `<svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M181.98 63.0976C181.19 52.471 171.999 44.4743 161.493 45.2743C150.981 46.0809 143.075 55.3776 143.866 66.001C144.519 74.761 150.931 81.9343 159.335 83.541L163.731 142.714C163.974 145.544 166.439 147.674 169.234 147.461C170.598 147.358 171.847 146.718 172.74 145.658C173.63 144.604 174.058 143.268 173.95 141.901L169.527 82.6743C177.449 79.731 182.623 71.711 181.98 63.0976ZM162.241 55.3643C167.217 54.9843 171.567 58.7676 171.939 63.7976C172.312 68.8276 168.575 73.2276 163.599 73.6043C158.623 73.981 154.273 70.201 153.901 65.171C153.522 60.1443 157.265 55.7443 162.241 55.3643Z" fill="#59BBD0"/>
  <path d="M215.738 83.8343C214.38 83.6043 213.016 83.921 211.896 84.731C210.782 85.5376 210.044 86.731 209.83 88.081L208.439 96.381C207.912 99.5176 206.103 101.918 203.529 103.048L206.149 87.4243C206.6 84.6143 204.712 81.941 201.947 81.4676C200.596 81.2343 199.232 81.5543 198.098 82.3676C196.984 83.181 196.256 84.3743 196.045 85.7143L193.432 101.318C191.366 99.391 190.433 96.5243 190.967 93.3876L192.364 85.0543C192.809 82.2476 190.921 79.581 188.163 79.1076C186.805 78.8743 185.447 79.191 184.327 80.001C183.206 80.8076 182.475 82.0043 182.254 83.3543L180.853 91.7176C179.4 100.378 183.912 108.901 191.685 112.508L181.868 171.011C181.43 173.818 183.315 176.484 186.077 176.958C187.428 177.188 188.792 176.871 189.912 176.061C191.026 175.254 191.761 174.061 191.979 172.711L201.789 114.148C210.176 113.214 217.106 106.664 218.536 98.111L219.933 89.791C220.385 86.9843 218.5 84.311 215.738 83.8343Z" fill="#59BBD0"/>
  <path d="M117.694 115.868C117.477 115.868 117.272 115.921 117.058 115.934C117.427 114.648 117.694 113.314 117.694 111.904C117.694 104.018 111.377 97.6243 103.58 97.6243C95.7833 97.6243 89.4661 104.018 89.4661 111.904C89.4661 111.931 89.4727 111.954 89.4727 111.981C84.0782 112.298 79.5734 115.811 77.7708 120.708C77.4775 120.681 77.1908 120.618 76.8909 120.618C71.6843 120.618 67.4563 124.891 67.4563 130.161C67.4563 135.431 71.6843 139.704 76.8909 139.704C76.8909 144.091 80.4071 147.648 84.7471 147.648C86.1674 147.648 87.4757 147.234 88.6291 146.571C89.1333 146.944 89.6704 147.268 90.2438 147.538C90.2438 147.571 90.2372 147.601 90.2372 147.634C90.2372 152.458 94.0994 156.368 98.8645 156.368C103.633 156.368 107.502 152.458 107.502 147.634C107.502 147.118 107.436 146.614 107.347 146.121C108.734 147.074 110.402 147.634 112.201 147.634C116.966 147.634 120.831 143.724 120.831 138.901C120.831 137.368 120.406 135.951 119.721 134.698C123.946 133.758 127.116 129.961 127.116 125.401C127.116 120.138 122.901 115.868 117.694 115.868Z" fill="#59BBD0"/>
  <path d="M58.0546 138.894C60.2204 138.894 61.9761 137.118 61.9761 134.927C61.9761 132.737 60.2204 130.961 58.0546 130.961C55.8888 130.961 54.1331 132.737 54.1331 134.927C54.1331 137.118 55.8888 138.894 58.0546 138.894Z" fill="#59BBD0"/>
  <path d="M135.743 120.614C138.333 120.614 140.432 118.491 140.432 115.871C140.432 113.251 138.333 111.128 135.743 111.128C133.153 111.128 131.054 113.251 131.054 115.871C131.054 118.491 133.153 120.614 135.743 120.614Z" fill="#59BBD0"/>
  <path d="M127.116 101.604C129.289 101.604 131.05 99.8223 131.05 97.6242C131.05 95.4261 129.289 93.6442 127.116 93.6442C124.943 93.6442 123.181 95.4261 123.181 97.6242C123.181 99.8223 124.943 101.604 127.116 101.604Z" fill="#59BBD0"/>
  <path d="M140.432 97.6275C142.609 97.6275 144.373 95.8426 144.373 93.6408C144.373 91.4391 142.609 89.6542 140.432 89.6542C138.256 89.6542 136.491 91.4391 136.491 93.6408C136.491 95.8426 138.256 97.6275 140.432 97.6275Z" fill="#59BBD0"/>
  <path d="M123.995 81.971C138.119 78.7876 120.854 68.4876 115.368 71.6609C109.884 74.8376 105.159 74.8376 91.8189 67.6943C78.4826 60.5476 72.9826 66.1043 57.2867 77.2176C41.5942 88.331 60.4272 99.4443 60.4272 99.4443C65.1363 112.938 84.7504 93.0943 91.8156 86.741C98.8908 80.391 109.868 85.1543 123.995 81.971Z" fill="#59BBD0"/>
  <path d="M153.877 143.468L153.004 131.744C150.331 136.404 147.092 140.821 143.151 144.811C118.689 169.554 79.0295 169.554 54.5713 144.811C30.1065 120.061 30.1065 79.9475 54.5713 55.2075C77.2665 32.2475 113.031 30.6308 137.615 50.2808C138.939 47.8875 140.594 45.7008 142.508 43.7708C114.751 21.6775 74.4424 23.5275 48.8505 49.4175C21.2288 77.3542 21.2288 122.648 48.8505 150.591C76.4657 178.528 121.25 178.528 148.872 150.591C150.747 148.694 152.47 146.701 154.091 144.658C154.026 144.254 153.913 143.874 153.877 143.468Z" fill="#59BBD0"/>
  <path d="M174.302 156.371C172.931 156.914 171.494 157.321 169.982 157.434C169.603 157.461 169.227 157.477 168.848 157.477C164.709 157.477 160.933 155.687 158.191 152.841C157.084 154.107 156.016 155.401 154.82 156.611C123.913 187.871 73.8031 187.871 42.8991 156.611C11.9918 125.344 11.9918 74.6642 42.8991 43.4008C72.0994 13.8642 118.426 12.2742 149.518 38.5575C152.905 36.7608 156.698 35.6142 160.751 35.3008C161.486 35.2442 162.218 35.2175 162.94 35.2175C168.133 35.2175 173.027 36.6575 177.274 39.1308C174.681 35.7175 171.86 32.4175 168.772 29.2875C130.161 -9.7625 67.5617 -9.7625 28.9564 29.2875C-9.65214 68.3408 -9.65214 131.657 28.9564 170.714C67.5617 209.764 130.161 209.761 168.772 170.711C170.091 169.377 171.353 168.008 172.582 166.621L174.302 156.371Z" fill="#59BBD0"/>
  </svg>
  `;

  const SvgImage = () => <SvgXml xml={svgMarkup} width={size} height={size} />;

  return (
    <>
      <SvgImage />
    </>
  );
};

export default Logo;