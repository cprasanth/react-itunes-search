import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ResultList } from './ResultList';
import { SearchBox } from './SearchBox';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='sm' className={classes.root}>
      <Typography variant="h6" gutterBottom>
        iTunes Search
      </Typography>
      <SearchBox />
      <ResultList />
    </Container>
  );
};
