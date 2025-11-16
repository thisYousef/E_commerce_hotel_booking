import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useUnsplashImages from '../../ReusableParts/ApiFeching';
import classes from "./Rooms.module.css"

const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { imagesApi: imagesApi1, error: error1 } = useUnsplashImages('classic-bed-room', 3, 4, "portrait");
  const { imagesApi: imagesApi2, error: error2 } = useUnsplashImages('budget-bedroom', 3, 1, "portrait");
  const { imagesApi: imagesApi3, error: error3 } = useUnsplashImages('luxury-bedroom', 3, 2, "portrait");

  if (error1 || error2 || error3) {
    return <div>Error: {error1.message}</div>;
  }
  function getImageContent(index) {
    let title;
    let content;
    let price = "From:";

    if (index === 0) {
      title = "Lake view Room";
      content = "Twin Room \n If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
    } else if (index === 1) {
      title = "Queen Room Balcony";
      content = "Twin Room \n If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
    } else {
      title = "Apartment";
      content = "Twin Room \n If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
    }
    const contentPart1 = content.slice(0, 9);
    const contentPart2 = content.slice(9);
    const dataContent = `${contentPart1}${contentPart2}`;
    return { title, price, dataContent };
  }

  return (
    <section className="container">
      <Box sx={{ width: '100%' }}>
        <Box className={classes.box}>
          <span className='title'>Our Rooms</span>
          <h2 className='title'>Discover Our Rooms</h2>
          <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
            style: { background: "unset" }
          }}
            aria-label="secondary tabs example">
            <Tab label="Classic" {...a11yProps(0)} classes={{ selected: classes.selected }} />
            <Tab label="Budget" {...a11yProps(1)} classes={{ selected: classes.selected }} />
            <Tab label="Luxury" {...a11yProps(2)} classes={{ selected: classes.selected }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className={classes.content}>
            {imagesApi1.map((slide, index) => {
              const { title, price, dataContent } = getImageContent(index);

              return (
                <div className={classes.card} key={index} data-content={dataContent} style={{ whiteSpace: 'pre-line' }}>
                  <>
                    <img key={slide.id} src={slide.urls.small} alt={slide.alt_description} loading="lazy" />
                    <div>
                      <h3 className={classes.title}>{title}</h3>
                      <p className={classes.price}>{price} <span>$140</span> / Night <br />
                        <Link to={`/room-single`} className={classes.link}>Check Availability</Link>
                      </p>
                    </div>
                  </>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className={classes.content}>
            {imagesApi2.map((slide, index) => {
              const { title, price, dataContent } = getImageContent(index);

              return (
                <div className={classes.card} key={index} data-content={dataContent} style={{ whiteSpace: 'pre-line' }}>
                  <>
                    <img key={slide.id} src={slide.urls.small} alt={slide.alt_description} loading="lazy" />
                    <div>
                      <h3 className={classes.title}>{title}</h3>
                      <p className={classes.price}>{price}<span>$140</span> / Night <br />
                        <Link to={`/room-single`} className={classes.link}>Check Availability</Link>
                      </p>
                    </div>
                  </>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className={classes.content}>
            {imagesApi3.map((slide, index) => {
              const { title, price, dataContent } = getImageContent(index);

              return (
                <div className={classes.card} key={index} data-content={dataContent} style={{ whiteSpace: 'pre-line' }}>
                  <>
                    <img key={slide.id} src={slide.urls.small} alt={slide.alt_description} loading="lazy" />
                    <div>
                      <h3 className={classes.title}>{title}</h3>
                      <p className={classes.price}>{price}<span>$140</span> / Night <br />
                        <Link to={`/room-single`} className={classes.link}>Check Availability</Link>
                      </p>
                    </div>
                  </>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>
      </Box>
    </section>
  );
}