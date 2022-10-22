import { useAuth } from "../contexts/AuthContext";
import { useRef } from "react";
import React from "react";
import "./Login.css";


/*
function myFunction() {
  var user = document.getElementById("uname").value;
  var password = document.getElementById("password").value;
  alert("done")





}*/

export function Login() {
  const { login, signup } = useAuth();
  const username = useRef(null);
  const password = useRef(null);

  function handleClick() {
    login(username.current.value, password.current.value);
    alert("done");
    //alert(username.current.value + " " + password.current.value);
  }

  return (
    <div>
        <div class="svg-container">
        <svg
          viewBox="0 0 521 176"
          preserveAspectRatio="xMinYMin meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_2226)">
            <path d="M0 0V175.375H521V0H0Z" fill="#E0DECA" />
            <path
              d="M33.1251 35.125C27.3196 31.8927 21.5312 29.4542 14.8751 28.5897C12.7978 28.32 9.14531 28.01 7.69484 29.88C6.14666 31.876 8.79021 34.0836 10.2501 35.125C13.5296 37.4645 17.2807 39.1851 21.0001 40.7004C22.4273 41.2819 23.9695 42.1457 25.5001 42.375V42.5C20.8623 41.9139 15.1753 41.8161 11.0001 44.2345C9.5955 45.048 6.98363 47.341 7.83218 49.2495C8.53215 50.8239 11.307 50.8069 12.7501 50.8701C16.2568 51.0236 19.9242 50.3359 23.3751 49.76C24.8391 49.5157 26.7522 49.4485 28.1232 48.9246C28.9293 48.6165 29.1923 47.3429 29.5002 46.625C30.2432 44.8924 31.2358 43.231 32.4015 41.75C35.6301 37.6477 39.8458 35.1931 44.7501 33.625C44.3332 32.0219 42.4852 30.3504 41.5176 29C38.729 25.1081 35.8166 21.3644 32.6781 17.75C31.6537 16.5702 29.1988 13.6499 27.3751 14.1894C25.1261 14.8546 25.0477 18.4369 25.2862 20.25C26.0016 25.687 29.8131 30.9516 33.1251 35.125Z"
              fill="#094C43"
            />
            <path
              d="M33.125 35.125L33.25 35.25L33.125 35.125Z"
              fill="#E0DECA"
            />
            <path
              d="M64.7501 69.25C64.7501 71.2946 64.3747 73.3191 63.1346 75C59.9419 79.3271 53.2117 79.6086 49.2501 76.2125C44.0454 71.7506 43.8124 62.2266 45.5535 56.125C47.3649 49.7776 54.8867 44.9355 61.0001 49.2151C62.258 50.0957 63.2025 51.2897 63.9452 52.625C64.5086 53.6379 64.7432 54.788 66.0001 55.1514C66.8826 55.4064 67.9636 55.25 68.8751 55.25H74.3751C75.452 55.25 76.8525 55.4837 77.8751 55.1084C79.0331 54.6831 79.4255 53.6479 79.3701 52.5C79.2842 50.723 78.1155 48.6401 77.25 47.125C74.5381 42.3776 70.319 38.8576 65.1251 37.125C52.2009 32.8135 36.5261 38.0257 31.6317 51.375C26.9182 64.2309 30.4351 81.6147 43.7501 87.7114C46.5637 88.9997 49.6744 89.6531 52.7501 89.8639C56.4161 90.1149 60.2184 89.5357 63.5001 87.8427C64.9966 87.0706 66.6159 85.0426 68.2501 84.793C70.6106 84.4324 70.403 87.2661 71.6305 88.3469C72.2146 88.8612 72.8884 88.8747 73.6251 88.875C75.2832 88.8756 78.4006 89.4744 79.737 88.3257C80.7379 87.4655 80.5001 86.0521 80.5001 84.875V76.375V65.125C80.5001 63.8156 80.904 61.7226 80.0554 60.63C78.9664 59.2279 76.4456 59.75 74.8751 59.75H62.1251C60.7557 59.75 58.3919 59.2951 57.252 60.1774C55.6831 61.3917 56.0386 65.2284 56.324 67C56.4424 67.7347 56.7125 68.4266 57.3801 68.8291C59.1892 69.9197 62.6947 69.25 64.7501 69.25ZM204.75 35.803C200.791 36.3227 196.989 36.5792 193.25 38.1784C190.433 39.3832 187.793 41.1736 186.065 43.75C182.491 49.0792 183.161 57.505 187.63 62.1245C191.981 66.6231 198.689 67.7812 204.5 69.2341C206.999 69.859 209.778 70.397 211.875 71.9875C213 72.8401 213.941 74.2766 213.555 75.75C213.245 76.9357 212.054 77.6901 211 78.1409C208.453 79.2311 205.193 79.0515 202.625 78.1182C200.729 77.4292 199.011 76.1832 198.04 74.375C197.479 73.3291 197.423 71.8476 196.489 71.0487C195.65 70.3312 194.524 70.5 193.5 70.5H186.875C185.835 70.5 184.644 70.317 183.755 70.975C182.495 71.9091 182.786 73.4312 183.05 74.75C183.659 77.7961 184.99 80.6486 187.036 83C193.078 89.9439 204.13 90.8191 212.625 89.3437C216.015 88.7551 219.385 87.7046 222.25 85.7464C229.786 80.5964 231.39 68.7857 224.375 62.5217C220.344 58.9222 214.463 57.7251 209.375 56.4534C206.613 55.7626 203.518 55.157 201.125 53.5411C199.989 52.7741 198.836 51.4847 199.038 50C199.583 45.9901 206.125 46.2069 208.875 47.1681C210.483 47.7302 211.93 48.9756 212.704 50.5C213.378 51.8286 213.471 53.6405 215.25 53.9589C217.993 54.4496 221.211 54 224 54C225.153 54 226.463 54.2245 227.37 53.3615C228.523 52.2654 228.123 50.6119 227.749 49.25C226.855 45.9914 225.143 43.1619 222.625 40.8964C218.126 36.8471 210.708 35.021 204.75 35.803ZM253.5 35.803C249.551 36.3215 245.729 36.5559 242 38.1601C239.049 39.43 236.351 41.2555 234.588 44C231.36 49.0209 231.775 57.1877 235.886 61.625C240.279 66.3652 246.749 67.6107 252.75 69.1091C255.34 69.7559 258.52 70.2865 260.625 72.0407C261.599 72.8521 262.598 74.1427 262.31 75.5C262.004 76.9435 260.676 77.8045 259.375 78.267C256.819 79.1754 253.919 78.9862 251.375 78.1245C249.39 77.4521 247.658 76.1149 246.665 74.25C246.096 73.1806 246.089 71.8547 245.123 71.0281C244.293 70.3174 243.141 70.5 242.125 70.5H235.5C234.509 70.5 233.341 70.3067 232.503 70.9447C231.218 71.9209 231.451 73.4929 231.765 74.875C232.449 77.8871 233.678 80.6726 235.744 83C241.955 89.9976 252.845 90.7726 261.5 89.3206C264.81 88.7652 268.248 87.66 271 85.6966C278.055 80.6635 280.266 69.1811 273.5 62.8861C269.335 59.0114 263.423 57.9142 258.125 56.4811C255.371 55.7361 252.28 55.2041 249.875 53.58C248.594 52.7146 247.499 51.3871 247.791 49.75C248.453 46.0517 254.901 46.1466 257.5 47.1332C259.174 47.7685 260.546 48.9141 261.389 50.5C262.045 51.7356 262.14 53.508 263.75 53.9302C264.704 54.1805 265.894 54 266.875 54H273C274.126 54 275.37 54.1579 276.209 53.2369C277.154 52.1989 276.834 50.8529 276.544 49.625C275.864 46.7481 274.416 44.0121 272.37 41.875C267.839 37.144 259.936 34.958 253.5 35.803ZM348.375 35.803C342.865 36.5264 337.883 37.8007 333.625 41.6462C325.104 49.3426 323.913 63.7441 327.375 74.125C328.51 77.5289 330.346 80.804 332.896 83.3537C338.611 89.069 347.113 90.6354 354.875 89.5897C359.645 88.9471 364.474 86.8495 367.864 83.3701C372.694 78.4121 374.709 71.6414 375.005 64.875C375.465 54.355 372.193 43.0889 362 38.1574C360.04 37.209 357.895 36.5587 355.75 36.1982C353.383 35.8004 350.771 35.4884 348.375 35.803ZM400 35.803C394.394 36.5391 389.446 37.8634 385.125 41.7712C381.498 45.0515 379.238 49.7791 378.198 54.5C375.946 64.7055 377.518 77.0569 385.625 84.3536C391.175 89.3482 399.336 90.5547 406.5 89.5897C411.349 88.9365 416.19 86.7937 419.62 83.2495C424.383 78.3287 426.181 71.7704 426.636 65.125C427.361 54.5342 423.738 42.933 413.5 38.0976C411.561 37.1821 409.488 36.5532 407.375 36.1982C405.006 35.8001 402.4 35.488 400 35.803ZM489.75 35.803C485.78 36.3242 482.006 36.6019 478.25 38.178C474.989 39.5466 472.085 41.7317 470.358 44.875C467.541 49.9996 468.469 57.7837 472.505 62C476.873 66.5622 483.511 67.7372 489.375 69.2034C491.905 69.8359 494.754 70.3734 496.875 71.9875C497.96 72.8127 498.888 74.1999 498.559 75.625C498.256 76.9362 496.93 77.7939 495.75 78.2417C493.23 79.1985 490.134 79.0301 487.625 78.1182C485.71 77.4224 484.03 76.1902 483.039 74.375C482.479 73.35 482.408 71.8444 481.488 71.0665C480.615 70.3296 479.435 70.5 478.375 70.5H471.75C470.751 70.5 469.606 70.3176 468.755 70.9547C467.464 71.9217 467.754 73.5152 468.053 74.875C468.721 77.904 470.004 80.832 472.136 83.125C478.411 89.8735 489.011 90.8397 497.625 89.3437C501.011 88.7556 504.401 87.7019 507.25 85.7244C514.553 80.6547 516.406 69.067 509.625 62.7611C505.606 59.0242 499.658 57.7735 494.5 56.4841C491.708 55.786 488.546 55.1955 486.125 53.56C484.953 52.7681 483.841 51.519 484.024 50C484.5 46.0287 491.05 46.21 493.75 47.1255C495.364 47.6727 496.799 48.8616 497.593 50.375C498.301 51.7264 498.443 53.6412 500.25 53.9589C502.999 54.4419 506.208 54 509 54C510.155 54 511.445 54.2099 512.363 53.3484C513.498 52.2811 513.114 50.7031 512.765 49.375C511.898 46.0742 510.166 43.1829 507.625 40.8964C503.131 36.8521 495.696 35.0224 489.75 35.803ZM129.5 88.875C129.073 87.4226 128.086 85.9847 127.406 84.625C125.751 81.317 123.998 78.058 122.344 74.75C121.602 73.2657 119.766 70.9344 119.811 69.25C119.842 68.0752 120.935 67.3554 121.75 66.6925C122.915 65.7452 123.963 64.6352 124.788 63.375C127.986 58.4886 128.394 51.236 125.774 46C120.46 35.3792 106.534 36.625 96.6251 36.625H89.1251C87.9591 36.625 86.6091 36.5805 85.8312 37.6304C85.2455 38.421 85.3751 39.4502 85.3751 40.375V46.125V68.75V83.25C85.3751 84.8771 84.8547 87.3417 86.3756 88.4189C87.6755 89.3395 90.1049 88.875 91.6251 88.875C93.7571 88.875 98.4962 89.7996 99.739 87.6249C100.245 86.7385 100 85.36 100 84.375V76.5C100 75.311 99.7729 73.8442 100.336 72.7501C101.011 71.4379 102.431 71.2785 103.75 71.3866C105.752 71.551 106.572 74.0814 107.344 75.625C108.745 78.4255 110.194 81.2002 111.594 84C112.241 85.2929 112.792 87.0436 113.791 88.1019C114.876 89.2516 116.822 88.875 118.25 88.875H129.5ZM148 36.6835C146.398 36.9864 145.998 38.2572 145.541 39.625C144.804 41.8371 144.029 44.0371 143.291 46.25C139.924 56.3537 136.368 66.3961 133 76.5C132.124 79.1299 131.21 81.7454 130.334 84.375C129.916 85.627 129.499 87.0192 130.526 88.1119C131.385 89.0245 132.611 88.875 133.75 88.875H140.875C141.611 88.875 143.44 89.2081 144.034 88.7465C144.53 88.3611 144.688 86.9641 144.858 86.375C145.435 84.3685 146.06 82.375 146.66 80.375C146.85 79.7409 146.964 78.3944 147.553 78.0035C148.381 77.4527 150.639 77.875 151.625 77.875H161.125C162.504 77.875 164.099 77.6827 165.076 78.88C166.359 80.452 166.756 83.567 167.323 85.5C167.619 86.5131 167.843 87.7646 168.753 88.4189C169.693 89.0957 171.034 88.875 172.125 88.875C174.834 88.875 178.243 89.4355 180.875 88.8085C183.574 88.1656 182.501 85.2546 181.916 83.5C180.179 78.2867 178.404 73.0879 176.666 67.875C174.205 60.4917 171.669 53.1331 169.209 45.75L167.291 40C166.959 39.0022 166.739 37.8615 165.873 37.1742C164.688 36.233 162.541 36.625 161.125 36.625H152.375C150.969 36.625 149.384 36.422 148 36.6835ZM325.875 88.875C323.95 84.2504 321.346 79.6591 318.961 75.25C318.248 73.9305 317.578 72.5921 316.906 71.25C316.584 70.6054 316.095 69.8762 316.154 69.125C316.249 67.8939 317.401 67.266 318.25 66.567C319.384 65.6335 320.406 64.4889 321.195 63.25C324.651 57.8221 324.83 49.5916 321.07 44.25C314.741 35.2596 301.964 36.625 292.375 36.625H285.25C284.074 36.625 282.818 36.6667 282.088 37.7505C281.528 38.5832 281.625 39.6732 281.625 40.625V46.25V68V83C281.625 84.6427 281.136 87.2584 282.636 88.4C283.891 89.3545 286.379 88.875 287.875 88.875C289.988 88.875 294.878 89.8114 296.073 87.6249C296.63 86.6049 296.375 85.124 296.375 84V76C296.375 73.2434 296.818 71.1142 300.125 71.3866C302.159 71.5542 302.884 74.0807 303.656 75.625C305.035 78.3842 306.464 81.1154 307.844 83.875C308.513 85.2107 309.123 87.0186 310.151 88.1119C311.209 89.2354 313.108 88.875 314.5 88.875H325.875ZM427.125 36.6835C424.03 37.2686 425 42.0979 425 44.375C425 45.4246 424.85 46.6195 425.549 47.4981C426.374 48.5345 427.548 48.5 428.75 48.5H435.25C436.75 48.5 438.289 48.3971 439.054 50C439.431 50.792 439.25 51.8956 439.25 52.75V58.375V78.5V85C439.25 86.1292 439.17 87.3411 440.041 88.2089C440.896 89.0601 442.15 88.875 443.25 88.875C446.039 88.875 449.258 89.3246 452 88.8339C452.994 88.6559 453.754 87.854 453.941 86.875C454.391 84.533 454 81.7605 454 79.375V58.625V52.875C454 51.9539 453.835 50.8557 454.24 50C454.929 48.5449 456.228 48.5 457.625 48.5H464.375C465.861 48.5 467.423 48.4911 468.065 46.875C468.371 46.1052 468.25 45.1871 468.25 44.375C468.25 42.3779 469.054 38.3366 467.12 37.0702C466.15 36.4352 464.851 36.625 463.75 36.625H456.625H436.75C433.693 36.625 430.128 36.1159 427.125 36.6835Z"
              fill="#094C43"
            />
            <path
              d="M102.125 48.1835C99.0498 48.7648 99.9999 53.4879 99.9999 55.75C99.9999 56.7505 99.8854 57.876 100.482 58.7481C101.663 60.4751 105.72 59.8801 107.5 59.524C111.521 58.7196 114.525 53.9085 111.352 50.3769C109.347 48.1463 104.946 47.6501 102.125 48.1835ZM298.5 48.1835C295.405 48.7684 296.375 53.3238 296.375 55.625C296.375 56.6555 296.192 57.8603 296.831 58.7481C298.032 60.4175 301.841 59.9039 303.625 59.5675C304.996 59.3088 306.496 58.7731 307.477 57.7388C309.296 55.8201 309.451 52.211 307.602 50.2613C305.594 48.1436 301.252 47.6633 298.5 48.1835ZM349 49.4299C344.251 50.1715 341.849 54.1966 341.115 58.625C340.102 64.7405 340.939 75.0909 348.875 75.9791C349.991 76.1041 351.011 76.1245 352.125 75.9453C356.29 75.2748 358.757 71.8131 359.55 67.875C360.857 61.3765 360.194 50.8081 352 49.4693C351.051 49.3143 349.951 49.2813 349 49.4299ZM400.75 49.4285C395.946 50.1168 393.481 54.1419 392.74 58.625C391.72 64.7976 392.586 74.8123 400.375 75.9626C401.515 76.131 402.61 76.131 403.75 75.9626C407.677 75.3825 410.111 72.1466 411.046 68.5C412.701 62.0395 411.975 50.8759 403.75 49.4901C402.787 49.328 401.719 49.2898 400.75 49.4285ZM155.625 54.6913C153.472 55.1785 153.254 58.2483 152.707 60C152.274 61.3878 151.265 63.4108 151.706 64.875C152.421 67.2466 156.972 66.9665 158.875 66.4686C159.892 66.2023 160.626 65.3039 160.701 64.25C160.765 63.3588 160.264 62.3384 160.004 61.5C159.449 59.7153 159.15 57.3241 158.129 55.7505C157.605 54.9434 156.58 54.475 155.625 54.6913Z"
              fill="#E0DECA"
            />
            <path
              d="M266.625 101.928C261.801 102.561 257.555 103.346 253.896 106.911C246.199 114.412 246.734 130.127 254.625 137.229C259.646 141.747 267.912 142.626 274.125 140.414C278.059 139.013 281.06 136.075 282.906 132.375C283.496 131.19 284.685 129.142 283.669 127.901C282.707 126.727 279.972 127.25 278.625 127.25C277.32 127.25 275.16 126.84 274 127.511C272.704 128.261 272.241 130.357 270.999 131.36C267.861 133.892 263.104 132.241 261.087 129.125C257.164 123.064 259.196 109.785 268.375 110.772C270.259 110.974 271.86 112.413 272.766 114C273.157 114.686 273.331 115.634 273.917 116.183C274.52 116.747 275.366 116.625 276.125 116.625H281.375C282.111 116.625 282.984 116.763 283.601 116.274C285.421 114.833 282.907 110.801 282.024 109.375C278.964 104.44 272.485 101.159 266.625 101.928ZM160.375 126.5C160.374 132.422 153.627 135.304 149.125 131.567C145.387 128.465 145.08 121.587 146.304 117.25C147.61 112.621 152.829 108.646 157.5 111.795C158.385 112.391 159.112 113.201 159.641 114.125C160.077 114.889 160.314 115.874 161.25 116.168C162.99 116.715 165.551 116.25 167.375 116.25C168.187 116.25 169.217 116.416 170 116.168C170.767 115.925 171.147 115.14 171.112 114.375C171.054 113.138 170.33 111.832 169.78 110.75C167.789 106.831 164.207 103.995 160 102.786C150.412 100.031 139.39 104.015 136.01 113.875C132.909 122.922 135.297 134.921 144.25 139.639C146.716 140.939 149.501 141.425 152.25 141.614C154.727 141.784 157.437 141.182 159.625 140.027C160.676 139.472 161.827 138.051 163 137.904C164.621 137.699 164.482 139.552 165.277 140.347C166.251 141.32 168.609 140.89 169.875 140.875C170.4 140.867 170.937 140.814 171.349 140.447C172.081 139.796 172 138.76 172 137.875V131.75V123.5C172 122.483 172.265 120.984 171.571 120.138C170.744 119.13 168.907 119.5 167.75 119.5H158.625C157.534 119.5 155.816 119.174 154.887 119.857C153.801 120.655 154.07 123.903 154.277 125.125C154.356 125.58 154.62 125.961 155.011 126.204C156.295 126.999 158.901 126.5 160.375 126.5ZM226 102.053C221.895 102.592 218.216 103.726 215.13 106.646C212.974 108.685 211.504 111.549 210.697 114.375C208.614 121.676 209.402 131.255 215.011 136.864C218.955 140.807 224.981 142.11 230.375 141.464C234.434 140.979 238.331 139.33 241.104 136.25C244.202 132.806 245.45 128.266 245.761 123.75C246.282 116.173 244.017 107.886 236.875 104.039C235.364 103.225 233.676 102.705 232 102.375C230.086 101.998 227.944 101.798 226 102.053ZM177.625 102.683C176.921 102.82 176.34 103.279 176.174 104C175.696 106.081 176.125 108.737 176.125 110.875V132.75V138C176.125 138.821 175.996 139.722 176.641 140.349C177.585 141.262 179.54 140.875 180.75 140.875C182.32 140.875 185.839 141.559 186.692 139.875C187.079 139.112 186.875 137.956 186.875 137.125V131.125C186.875 129.364 187.345 127.754 189.5 128.024C190.982 128.209 191.574 129.961 192.156 131.125C193.202 133.217 194.27 135.297 195.342 137.375C195.817 138.294 196.186 139.426 196.849 140.226C197.461 140.968 198.382 140.875 199.25 140.875C201.319 140.875 204 141.331 206 140.805C208.084 140.257 207.025 137.989 206.406 136.75C205.127 134.192 203.765 131.674 202.47 129.125C202.052 128.306 201.135 127.087 201.419 126.125C201.762 124.961 203.435 124.169 204.192 123.25C205.806 121.289 206.759 118.791 206.87 116.25C206.937 114.709 206.88 113.121 206.48 111.625C204.015 102.38 193.386 102.625 185.75 102.625C183.17 102.625 180.156 102.193 177.625 102.683ZM288.875 102.691C286.851 103.159 287.375 105.818 287.375 107.375V121.875V134.875C287.375 136.356 286.902 138.835 287.749 140.12C288.657 141.495 291.935 140.875 293.375 140.875H306.25C307.825 140.875 310.29 141.34 311.75 140.721C312.272 140.5 312.634 140.064 312.724 139.5C312.981 137.87 312.752 136.025 312.75 134.375C312.749 133.626 312.701 132.936 311.997 132.501C311.205 132.01 309.896 132.25 309 132.25H301.75C300.712 132.25 299.472 132.43 298.691 131.584C298.045 130.881 298.25 129.754 298.25 128.875C298.25 128.174 298.101 127.27 298.432 126.626C298.951 125.616 300.019 125.625 301 125.625H307.375C308.501 125.625 309.936 125.834 310.394 124.499C310.661 123.716 310.5 122.693 310.5 121.875C310.5 120.904 310.745 119.536 310.374 118.625C309.851 117.342 308.385 117.5 307.25 117.5H301.5C300.719 117.5 299.664 117.692 299.002 117.196C297.847 116.33 298.211 114.285 298.252 113C298.31 111.145 300.135 111.25 301.5 111.25H308.5C309.471 111.25 310.644 111.382 311.294 110.494C311.716 109.916 311.625 109.176 311.625 108.5C311.625 107.001 312.291 103.593 310.625 102.832C309.02 102.099 306.244 102.625 304.5 102.625H294C292.39 102.625 290.445 102.328 288.875 102.691ZM318.5 102.692C317.8 102.862 317.249 103.403 317.149 104.125C316.849 106.292 317.125 108.686 317.125 110.875V132.625V138C317.125 138.78 316.974 139.714 317.566 140.326C318.489 141.279 320.546 140.875 321.75 140.875C323.244 140.875 326.56 141.506 327.537 140.12C328.116 139.297 327.875 137.951 327.875 137C327.875 134.62 327.651 132.117 327.887 129.75C328.045 128.185 329.977 127.566 331.25 128.267C332.382 128.892 332.915 130.789 333.517 131.875C335.394 135.26 337.007 138.81 338.782 142.25C341.625 147.756 345.231 153.38 350.25 157.137C355.699 161.219 364.007 162.299 370.5 160.446C372.519 159.87 374.38 158.997 376.125 157.834C377.632 156.827 378.961 155.621 380.141 154.25C386.432 146.94 386.35 138.359 386.126 129.25C386.042 125.801 386.222 122.308 385.896 118.875C385.549 115.23 385.75 111.414 385.75 107.75C385.75 106.399 386.001 104.38 384.375 103.85C383.165 103.455 381.754 103.625 380.5 103.625C379.124 103.625 376.567 103.143 375.387 103.967C373.932 104.986 374.25 108.333 374.25 109.875C374.25 113.596 374.745 117.723 373.974 121.375C373.585 123.217 372.622 125.071 370.875 125.966C367.695 127.594 364.899 124.429 364.276 121.5C363.357 117.176 364.5 112.608 363.927 108.25C363.77 107.048 363.989 104.762 362.861 103.967C361.605 103.081 358.726 103.625 357.25 103.625C355.865 103.625 353.666 103.248 352.505 104.177C351.735 104.794 351.75 105.726 351.75 106.625C351.75 108.265 351.906 109.996 351.714 111.625C350.662 120.541 352.342 132.336 361.5 136.461C363.866 137.527 366.667 137.656 369.125 136.83C370.525 136.36 372.562 134.581 373.987 135.799C375.327 136.945 374.721 139.421 374.321 140.875C373.157 145.112 370.935 149.072 366.25 149.924C356.272 151.734 349.357 140.902 345.594 133.375L343.344 128.875C343.006 128.199 342.419 127.389 342.339 126.625C342.186 125.164 344.952 123.628 345.745 122.5C347.442 120.087 347.997 117.158 347.87 114.25C347.815 112.997 347.559 111.668 347.1 110.5C343.81 102.128 333.795 102.625 326.375 102.625C323.94 102.625 320.864 102.117 318.5 102.692Z"
              fill="#094C43"
            />
            <path
              d="M188 111.213C186.188 111.834 186.875 115.387 186.875 116.875C186.875 117.538 186.796 118.295 187.212 118.862C188.171 120.165 191.928 119.588 193.25 119.114C195.769 118.21 197.055 114.76 195.066 112.662C193.626 111.142 189.975 110.537 188 111.213ZM329 111.207C327.189 111.782 327.875 115.416 327.875 116.875C327.875 117.542 327.776 118.297 328.206 118.862C329.156 120.108 332.689 119.613 334 119.185C336.69 118.307 338.139 114.858 335.989 112.63C334.526 111.115 330.995 110.573 329 111.207ZM226.625 112.055C223.14 112.603 221.432 115.782 220.984 119C220.341 123.612 220.996 130.583 226.75 131.391C227.611 131.513 228.391 131.484 229.25 131.339C232.2 130.841 233.754 128.313 234.421 125.625C235.794 120.104 234.165 110.868 226.625 112.055Z"
              fill="#E0DECA"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2226">
              <rect width="521" height="175.375" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <h1>Event Coordinator</h1>
      <div class="form">
      <input
        type="text"
        id="uname"
        ref={username}
        name="username"
        placeholder="username"
      ></input>
      <br />
      <input
        type="password"
        id="password"
        ref={password}
        placeholder="password"
        autoComplete="False"
      ></input>
      <br />
      <input type="submit" id="sub" value="login" onClick={handleClick}></input>
      </div>
    </div>
  );
}
