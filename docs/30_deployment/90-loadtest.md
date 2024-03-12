---
sidebar_position: 90
---

# loadtesting

### These are the reference sizing and loadtesting results 
These test are done in AWS eks.



<table>
  <thead>
    <tr>
      <th>Environment </th>
      <th>Setup </th>
      <th>Max Users</th>
      <th>Peak req/s</th>
      <th>Average req/s</th>
      <th>Database type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >aws</td>
      <td>  8 core, 4 nodes</td>
      <td>50</td>
      <td> 60</td>
      <td> 60</td>
      <td>internal postgres with gp2</td>
    </tr>
    <tr>
      <td >aws</td>
      <td>  8 core, 4 nodes</td>
      <td>250</td>
      <td>38</td>
      <td>215</td>
      <td>Aurora RDS </td>
    </tr>

  </tbody>
</table>
