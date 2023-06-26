import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { Beer } from '../models/Beer';

export const sqliteService = () => {

  const db = SQLite.openDatabase("beer.db");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("CREATE TABLE if not EXISTS beer (id INTEGER PRIMARY KEY, uid VARCHAR(36), brand VARCHAR(20), name VARCHAR(30), style VARCHAR(20), hop VARCHAR(20), yeast VARCHAR(20), malts VARCHAR(20), ibu VARCHAR(20), alcohol VARCHAR(20), blg VARCHAR(20))");
  });
  },[])

  const saveBeer = async (beer: Beer) => {
    if (beer){
      const fields = Object.values(beer)
      db.transaction(
        (tx) => {
          tx.executeSql('INSERT INTO beer (id, uid, brand, name, style, hop, yeast, malts, ibu, alcohol, blg) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
            [...fields], (resultSet) => {

            }
          )
        }
      );
    }
  };

  function listBeer(): Beer[] {
    var temp: Beer[] = []
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM beer',
        [],
        (tx, results) => {
          if (results.rows.length >= 1) {
            for (let i = 0; i < results.rows.length; ++i) {
              temp.push(results.rows.item(i));
            }
          };
        }
      );
    });
    return temp;
  }

  const findBeerById = async (id: number) => {
    var temp: Beer[] = []
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM beer where id = ? ;',
        [id],
        (tx, results) => {
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
        }
      );
    });
    return temp;
  }

  const eraseBeer = () => {
    db.transaction((tx) => {
      tx.executeSql("delete from beer;");
    });
  }

  return {db, saveBeer, listBeer, eraseBeer, findBeerById}
}