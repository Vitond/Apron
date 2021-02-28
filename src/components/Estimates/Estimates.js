import React from 'react';
import * as classes from './Estimates.module.scss';

const estimates = () => {
  return (
    <div>
      <h3>11.2.2021</h3>
      <h4>MyDevil</h4>
      <p>
      Všichni kromě patrika odhadují celkovou dobu práce na 50h. Patrik odhaduje 45 hodin.
      </p>
      <p>
        V odhadu data dokončení projektu se shodli všichni na 28.2
      </p>
      <p>
        V odhadu data dokončení designu se všichni shodli na 21.2
      </p>
      <p>21.2 a 28.2 byly stanoveny jako deadlines</p>
      <h4>Adlux</h4>
      <table>
        <thead>
          <tr>
            <th>Člen</th>
            <th>Odhad hodin</th>
            <th>Odhad dokončení</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pepa</td>
            <td>250h</td>
            <td>31.květen</td>
          </tr>
          <tr>
            <td>Ove</td>
            <td>350h</td>
            <td>1. červenec</td>
          </tr>
          <tr>
            <td>Kuba</td>
            <td>400h</td>
            <td>začátek července</td>
          </tr>
          <tr>
            <td>Jirka</td>
            <td>550h</td>
            <td>začátek července</td>
          </tr>
          <tr>
            <td>Patrik</td>
            <td>400h</td>
            <td>konec května</td>
          </tr>
          <tr>
            <td>Martin</td>
            <td>470h</td>
            <td>začátek května</td>
          </tr>
        </tbody>
        <tfoot>
            <tr>
              <td>Průměr</td>
              <td>403h</td>
              <td>10. června</td>
            </tr>
          </tfoot>
      </table>
    </div>
  )
}

export default estimates;