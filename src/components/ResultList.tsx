import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  artwork: {
    paddingRight: '10px',
  },
  loader: {
    display: 'flex',
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ListItemLink = (props: any) => {
  return <ListItem button component='a' {...props} />;
};

const ResultListBase = ({ searchResults, loading }: any) => {
  const classes = useStyles();
  return (
    <>
      {searchResults &&
      searchResults.results &&
      searchResults.results.length > 0 ? (
        <List component='nav'>
          {searchResults.results.map((data: any, i: number) => (
            <ListItemLink
              key={i}
              target='_blank'
              href={
                data.artistLinkUrl ||
                data.collectionViewUrl ||
                data.trackViewUrl
              }
            >
              {data.artworkUrl100 && (
                <ListItemAvatar className={classes.artwork}>
                  <img alt='artwork' src={data.artworkUrl100} />
                </ListItemAvatar>
              )}
              <ListItemText
                primary={data.trackName || data.collectionName}
                secondary={data.artistName}
              />
            </ListItemLink>
          ))}
        </List>
      ) : (
        <div className={classes.loader}>
          {searchResults.results && !loading && (
            <Typography variant='body1'>No results found!</Typography>
          )}
        </div>
      )}
      {loading && (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  searchResults: state.search.data,
  loading: state.search.loading,
});
export const ResultList = connect(mapStateToProps)(ResultListBase);
