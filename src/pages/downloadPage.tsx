import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import firebase from '../firebase';
import TopHeader from '../components/topPage/topHeader';
import { TileData } from '../types/types';

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
      marginTop: '5%',
    },
    tileImage: {
      height: '436px',
      width: '436px',
    },
  })
);

const DownloadPage: FC = () => {
  const { keyword } = useParams();
  const classes = useStyles();
  const [data, setData] = useState<TileData[]>([]);

  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection('tileData');
    const searchedData = tileDataRef.where(
      'keyword',
      'array-contains',
      searchWord
    );
    const snapShot = await searchedData.get();
    const temporaryData: object[] = [];

    snapShot.docs.map((doc: any) => {
      temporaryData.push(doc.data());
    });

    setData(temporaryData as TileData[]);
  };

  useEffect(() => {
    getData(keyword);
  }, []);

  const displayImage = () => {
    return (
      <div>
        {data.map((tile) => (
          <div>
            <img
              className={classes.tileImage}
              src={tile.image}
              alt={tile.title}
            />
          </div>
        ))}
      </div>
    );
  };

  const downloadButton = () => {
    return (
      <div>
        {data.map((tile) => (
          <Button variant='contained' href={tile.downloadUrl}>
            ダウンロード
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <TopHeader />
      <div className={classes.main}>
        {displayImage()}
        {downloadButton()}
      </div>
    </div>
  );
};

export default DownloadPage;
