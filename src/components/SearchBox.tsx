import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import * as actions from '../actions';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBoxBase = ({
  searchItunes,
  searchItunesAppend,
  clearSearchResults,
  appendedAll,
}: any) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('song');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (searchTerm !== '' && !appendedAll)
      searchItunesAppend({ searchTerm, searchType, offset });

    const onScroll = (e: Event) => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setOffset(offset + 10);
      }
    };

    if (!appendedAll) {
      window.addEventListener('scroll', onScroll);
    }
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchType, offset, appendedAll]);

  const handleSearchType = (
    event: React.SyntheticEvent,
    newSearchType: string
  ) => {
    if (newSearchType !== null) {
      setOffset(0);
      clearSearchResults();
      setSearchType(newSearchType);
    }
  };
  return (
    <>
      <ToggleButtonGroup
        value={searchType}
        exclusive
        onChange={handleSearchType}
        aria-label='search type'
      >
        <ToggleButton value='song' aria-label='song'>
          Song
        </ToggleButton>
        <ToggleButton value='album' aria-label='album'>
          Album
        </ToggleButton>
        <ToggleButton value='artist' aria-label='artist'>
          Artist
        </ToggleButton>
      </ToggleButtonGroup>
      <Paper component='form' className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder='Search iTunes'
          value={searchTerm}
          inputProps={{ 'aria-label': 'search iTunes' }}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (searchTerm !== '') {
                setOffset(0);
                clearSearchResults();
                searchItunes({ searchTerm, searchType, offset: 0 });
              }
            }
          }}
        />
        <IconButton
          type='button'
          className={classes.iconButton}
          aria-label='search'
          onClick={() => {
            if (searchTerm !== '') {
              setOffset(0);
              clearSearchResults();
              searchItunes({ searchTerm, searchType, offset: 0 });
            }
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  appendedAll: state.search.appendedAll,
});
const mapDispatchToProps = {
  searchItunes: actions.searchItunes,
  searchItunesAppend: actions.searchItunesAppend,
  clearSearchResults: actions.clearSearchResults,
};

export const SearchBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBoxBase);
