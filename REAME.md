THIS IS A SAMPLE WEB PAGE, WHICH IS USED FOR TRAINING INTERNSHIP
@keyframes slideInLeft {
  0% { opacity: 0; transform: translate3d(-100%, 0, 0); }
  //25% { opacity: 0; transform: translate3d(100%, 0, 0); }
  //50% { opacity: 0.5; transform: translate3d(50%, 0, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}
@keyframes slideInRight {
  0% { opacity: 0; transform: translate3d(100%, 0, 0); }
  //25% { opacity: 0; transform: translate3d(100%, 0, 0); }
  //50% { opacity: 0.5; transform: translate3d(50%, 0, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}
@keyframes fadeIn {
  0% { opacity: 0; }
  25% { opacity: 0; }
  50% { opacity: 0; }
  75% { opacity: 0; }
  100% { opacity: 1; }
}

.tab-container {
  width: 100%;
  background: #f5f5f5;
  margin-top: 2px;
}
.tab {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  padding-top: 148px;
  padding-bottom: 120px;
  .tab__select {
    animation: slideInLeft 1s linear;
    .tab__list {
      display: flex;
      flex-direction: column;
      .listitem__tablink {
        padding-top: 46px;
        padding-bottom: 46px;
        padding-left: 35px;
        padding-right: 35px;
        font-size: 20px;
        color: white;
        text-align: center;
        background: #333333;
        border: 0.5px solid white;
        cursor: pointer;
        transition: 0.5s;
      }
      .listitem__tablink:hover {
        background: #ffa35e;
      }
      .listitem__tablink.active {
        background: #ff8b38;
      }
    }
  }

  .tab__text {
    display: block;
    width: 550px;
    .title {
      opacity: 1;
    }
    strong {
      font-size: 26px;
    }
    #tab__1 {
      display: none;
      color: green;
    }
    #tab__2 {
      display: none;
      color: red;
    }
    #tab__3 {
      display: none;
      color: blue;
    }
    p {
      padding-bottom: 53px;
      opacity: 0.7;
    }
    .btn-download {
      width: 120px;
      background: #ff8b38;
      text-align: center;
      border-radius: 3px;
      a {
        display: block;
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        strong {
          font-size: 16px;
        }
      }
      a:hover {
        background: #FFAB6A;
        border-radius: 3px;
      }
      a:active {
        transform: translateY(0.3px);
      }
    }
    animation: fadeIn 2s linear;
  }

  .tab__img {
    animation: slideInRight 1s linear;
    img {
      padding-top: 25px;
    }
  }
}

// Responsive
@media (max-width: 1109px) {

}

@media #{$info-phone-4} {

}
