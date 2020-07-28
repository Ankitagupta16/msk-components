import React from 'react'

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  academicItem: {
    margin: 10
  },
  listItem:{
    padding:10,
  }

})



const Basic = (
  {
    theme,
    headlineText,
    academic
  }
) => {
  const styles = useStyles();

  function renderAcademic(academicDetails){
    const counts = [1,2,3];
    const listItems = counts.map((count) =>
    <li style={styles.listItem}>
    <h2 style={styles.degreeText}>{academicDetails.degree.value}</h2>
    <h3 style={styles.academicItem}> {academicDetails.university.value} </h3>
    <h3 style={styles.academicItem}>{academicDetails.year.value}</h3>
    <h3 style={styles.academicItem}>{academicDetails.percentage.value}</h3>
    </li>
    );
    return (
      <ul>{listItems}</ul>
    );
    }

  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <h1 style={styles.headlineText} >{headlineText.value}</h1>
      <hr />
          {academic.value.map((academicDetails, id) => { 
        return <div key={id}>
          {renderAcademic(academicDetails.value)}
        </div>
      })}
    </div>
  );
};

export default Basic;