import React from "react";
import "./style.css";

const items = [
  {
    img:
      "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg",
    userName: "John Doe",
    profileImg:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
  },
];

const LoggedIn = () => {
  const showContact = () => {};
  return items.map((item) => {
    return (
      <>
        <div className="dashboard-message">
          <div className="item">
            <div>
              <img src={item.img} alt="" />
            </div>
            <div className="stat_container">
              <div>
                <h1>{item.name}</h1>
              </div>
              <div className="statistics">
                <p className="date">{item.datePosted}</p>
                <p>{item.address}</p>
              </div>
              {/* <div className="performance">
              <h2>Performance and Specification</h2>
              <p>{item.state}</p>
              <p>{item.transmission}</p>
              <p>{item.millage}</p>
              </div> */}
              <div className="specifications">
                <div className="make">
                  <div>
                    <h3>{item.make}</h3>
                    <p>MAKE</p>
                  </div>
                  <div>
                    <h3>{item.model}</h3>
                    <p>MODEL</p>
                  </div>
                  <div>
                    <h3>{item.model}</h3>
                    <p>YEAR</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{item.color}</h3>
                    <p>COLOR</p>
                  </div>
                  <div>
                    <h3>{item.secondCondition}</h3>
                    <p>CONDITION</p>
                  </div>
                  <div>
                    <h3>{item.color}</h3>
                    <p>COLOR</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2>Ad Description</h2>
                  <p>{item.ad}</p>
                </div>
                <button onClick={showContact()} className="phoneButton">
                  Show Contact
                </button>
              </div>
            </div>
          </div>
          <div className="landing-sideBar">
            <div className="header">
              <div className="headerImg">
                <img className="profileImg" src={item.profileImg} alt="" />
              </div>
              <span className="userName">{item.userName}</span>
            </div>
            <div className="messages-box">
              <div className="fa-fa-message">
                <div className="message-image">
                  <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/messages-1924164-1629238.png" />
                </div>
                <div className="messageText">
                  <p className="message-box">My Adverts</p>
                </div>
              </div>
            </div>
            <div className="messages-box">
              <div className="fa-fa-message">
                <div className="message-image">
                  <img src="data:image/jpeg;base64,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" />
                </div>
                <div className="messageText">
                  <p className="message-box">My Adverts</p>
                </div>
              </div>
            </div>
            <div className="messages-box">
              <div className="fa-fa-message">
                <div className="message-image">
                  <img src="data:image/jpeg;base64,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" />
                </div>
                <div className="messageText">
                  <p className="message-box">My Adverts</p>
                </div>
              </div>
            </div>
            <div className="messages-box">
              <div className="fa-fa-message">
                <div className="message-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR64lFqNHXvQNKVzcts8S2891cju245xib7Xw&usqp=CAU" />
                </div>
                <div className="messageText">
                  <p className="message-box">My Adverts</p>
                </div>
              </div>
            </div>
            <div className="messages-box">
              <div className="fa-fa-message">
                <div className="message-image">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////09PT5+fnw8PDz8/Ojo6Pk5OTo6Oibm5vR0dH39/ePj4+7u7vIyMjAwMCysrJ9fX1bW1twcHCioqJLS0vY2NiqqqpERETNzc0vLy9VVVVQUFBfX18oKCg8PDwTExOTk5NsbGyEhIQeHh4QEBBnZ2ckJCQaGhotLS04ODiAgICL6mfqAAAKVklEQVR4nN2d61riQAyGKSAIiIIo6Aoqi6fV+7+/tS2HdpoZJsmXcvh+7rO2eZl2ZpJJ0kZiou7Pc4On+czGkqRhctUeEy/T26WJLSaEHQngr5oWxlgQtoWAjYmBMSaEMylhY2BgjQXhWEzYNbDGgvBWTHhjYI0FoRiwYbFiHBfh2MIa/CWncsJbvDUWhDdywi+8NRaEog3NWnhrLAgnCkKD5cKA8EVB+Ig3x4DwXUFosFzgCcW70lRXcHMMCPsawgXcHAPCkYbwD9wcA8KVhrDRgtuDJ/xQEbbh9uAJX1WEfbg9eEIVYGOItwd9wa6OcIm2B094rSPEh2rghHc6whe0PXjCHx2hwbyAvuC9khAeM4UTvikJp2iD0IQDJSA+3IYmVARpcvXABsEJh1pCeLgNTbjUEt6DDYITaoI0mT7BBgUJ21N+YOiPlhA+ufsv2M1WtivWseWFJpK41pj1szY73+nfBJwuL+Hl5o5P0fN3W37oVNJt9JrY374Ufq/LS1h83JYxA4niS3Uf4yY2O8Xdhffo0UfoRFv2DmQTyBfF2P9b/gPvKuMhbFXvGXwjlR4FpdvA/Zp31VQP36PtISQ9hLnPAZ/qZ1BKvuBpnwwF+fwumtDrqFMD2VKvgT69Eu9Gs+PL1BlxCAMu0Ny9q3qfFtLCcabo4VuLQbjH6OJANhdQoqoKb4Z/+HKt4gn33vZ+M5CmA5jrYx0kdidPQuRegSK8irlxOpAt6wHM9P47Sw6IybOqeSTh5f5LZbqXJnextYydy6hVmyB8MrXWVFQeQJVQGfA8rJYxhJ+HtlKlqpNRIQT4P4dU9YjVJbw4tIlaVXIdXML9i86RqxIFcQhVh/DHoU6Y8PvQ9gHUDBHKs3uPSJMAIeH3nqKmfkJwJOJQevESqs8cjkUjH+HDoS2DqUUT1uDr1aUVTajJKTw2dSnCKL/3VDQnCFVJk8enmyrhCfu9pCqEJ+33Ulq6hF+HtgiuyzLhifu9lBYlwjObZnI9Fgl1Wa9HqucC4Rn4vZQ6O0Kbw7HDq7khPAu/l9JkTahORTteTXPCuvze+8mqNxsNZ73V+KmmXf5LRqhMzI670+raCUYP+kttJmqMRimh+Y3mo4uEVOvGfpX6JbQewnAuzmBmfEzSSRqKmtb9+vRkDxR1ralX3KuHpGHpVERWE94YzjtfSSP2xJevSXyVll184fl3prF6EVgFr10rK8a/hKp6Qa/YlfVGq/JFuuLL21j4JchHtwhmfl3m+1J1bnZFogo0fMg9c4Iz3+IRfGVhzTl6ab5LtoRJE7qxEZe9YOf1tRmbSBRwvlZ0DQAiPm2ShrdxRdiTGrGN8QtmxXJ7yV3kFPSk/mgA5W3CHBWeo+LpGuJJfdABYoJiL0VnpnQGDHhG9OWD2vI+N8+0nKlwoT0kBZRiqwN/ToKimzGke1LJBE+udGnj325mWyWvTeVNQTofqiJj1bKLam5iU/6kKufRjRSHKMRSJc6CpuSJx7Alvf8nlehNZrILn1RY+afQFfigfy7yX2VzKqyNlexN9MRMfJVdgicVMpHmkuSAMuueJE8qsC0Jf030xxT8NaRt7pOKbA/Ejb4FYgqBsltmQjS0iRUzavM3cKkAIfPoW+U1uWK+I0JCZlAB2smZ+fyEInswwlckILfqI9SmIEDIi30B14pUvO13qM1bgJA3ZYP7ATILi2WEvFMpcE9H5pGYjJAX7gc3WmOGh2WEvBQNcG8g5lIlI+S9CuC2/8zNd2A/FSDkOaJgQmbpRyAABiNEdwDm7UwlvU0OTci6uZCQ9x6CZxrmUyoj5M2l4NWCOdMEIkSw9RDcZ415CiWbaXjbijssIfOAQbZa8PaldFMKsZj5E4ErwXwLcJ81Zr/lOgjBXciYQSIZIdPHxy6IvHsLCZnTGdR9YoYTv2WETd5doN8XYcb16Xj+PsIWN1cKGS/lVg8EHiAv4ZSdEgmMefNzh/zRWh+hICfiCUcoOd9jnluIMiJwLqLk7r7IPknYleVDwLY1woTQObk7pQjFGaeouYb7dcitqIQzglCeCwGKmSoyTQkLKoSX/+TXB32dQlPP+lAxwSXUZeqGVt5oKetZXUfVIdRmW1/rAdUZmE7CRImwrW7A864n1KdIfpeWrSIhonwmdFYZJUjSefG0tkCISRNWHgWDCnYLfYa2hOq0xI1UYUVYUfnX1l3dEALT9RWbt5Y+uXSrjbuxJoSWXIhXxRa05PqjQDiYI68sHkUsYN74NCfEF6uIYjYX4u2oV72c0KInhiACbtKHa5ES2lTjszfhRk0BhknDqgvdC+tlbFoU0KX6Throqq6dGCcZNjWQmdqWdcD/IvfhfctGcX3bavWHCMa+bYeqR7s64FzPs3BoY2TdT7RtVQdc0MeND/La7JsDW92n66EmbBGpRafvxMFa01ktjY26KWFdHYbmk6vZ8Fejq/HTa033HOe7trPsEpVrkBOefIdrr1J3PPMtzrBbW6YssTb3D4GO5zFpuiM8u66JmfKo2NrHt9r4HlQXRUK7Hi6H0/q0zaDjwJHoLSkTnlUX4UzXLuEZdYLOtE0N2cW8z6ebd6Z2lbCOznT1aRcnKpxbaL83fUwqVGEVCM/kywiZhiShvS9cm4qpoKUTUtPud3Wq6yM8l88/lBJ7yuf49nGTWtTyEzITLo9U5WNoJxejts/hGcr5IKmbT4M/4apd0zDh6bf2dj6GVM36quWzlJZyP+5cITz1FvvuR8mI3ER8n8g6Va1bJ7IvD22kStUSOoLQtHeysYjkSCpHODb3pFeb0zyLvRORykMRRgXeFmkchFl/JdTt7y6sG3UrKpmdzGTff7Xe+seqI5S82YQN9w4k2X2ErkYIX2hROLs2S6LY6Knw4O0bSPJMnSYM+MLvPedZtw3Sucmcw0CCLV3S4qko8T0QC+JnGtj5XH/dDUoSGkg6g8dDSPrCX+7wbf+3TbrBs68+nB5ITxqWr+6pmtJODd9WFiGeyv6roC5xCuH5r75/d+rh33zDtxX6lPVnXwHO0Fm2faVz3uq8YiZdcPg2aiE3tJOYrLjSQHrb+/orLDfP6VsvuqVlB3SW/BOdZbwbSO+fBKpkr9MJNWr4Cn8DmHPuiAnUr3wgP/y/SbjInF+Mpp9y+N2ku9NQf2ZwGT0g5x/WBXUtNKE+RABusAEn1PvP4CYpeEL12Qe8WRH4evokOWRZfyo4oXZvE2qBKBKcUOtMQZtPpIITak/owB0mDQi1X1MEd5g0INQuF+CeYRaEyjo4cHdCC0JlOTjcHvwVdYes8MXCgFB3KOCe/umFJ9Slqi7h9uAJdcsFsFHRWnhCXQ0OuIVmYkKoivOjPnOykwGhJqH6bf/luTIg1IRqwN0XUxkQahJWwB00UxkQakI16CBNYkKo2XsDOvhUrMFfUpMTjw7SJDaEivNEA2ssrikP1TwbWGNBKA/VQHqFObIglFduwIM0iQ2hPNMY+r2htSwI5ZMp61wtUiaE0jwiiyG0IeR+B2etUGqCXDaESfeK6yX+W8GjbLn+A+1+kGF5hYgOAAAAAElFTkSuQmCC" />
                </div>
                <div className="messageText">
                  <p className="message-box">My Adverts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default LoggedIn;
