--- 
hide_table_of_contents: true
---

# The Incident object

### Attributes

<div class="attribute">
  <div class="attributeheader"><span class="attributename">id</span> <span class="attributetype">string</span></div>

The unique identifier of the incident class. <br/>
<strong>The id follows the format of 'INC_YYYYMMDD_N' where: </strong>

- 'INC' is a fixed prefix indicating an incident.
- 'YYYYMMDD' represents the date the incident was created (Year, Month, Day).
- 'N' is a sequential number assigned to each incident created on that specific date, starting from 1."

</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">name</span> <span class="attributetype">string</span></div>

A rough title of what the incident is about.

</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">status</span> <span class="attributetype">string</span></div>
  Tracks the current status of an incident (e.g., "Open," "In Progress," "Resolved").
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">type</span> <span class="attributetype">string</span></div>
  Classifies the type of incident. 
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">date</span> <span class="attributetype">timestamp</span></div>
  The time where the incident took place. 
</div>

<div class="attribute">
<div class="attributeheader"><span class="attributename"> description </span> <span class="attributetype">string</span></div>
 Stores a detailed textual account of an incident. Provides crucial information for investigating the root cause of the incident. Enables clear communication about the incident between different teams and stakeholders.
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">reported_by</span> <span class="attributetype">string</span></div>
  Name of the reporter that reported this incident.
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">location</span> <span class="attributetype">string</span></div>
 The location where the incident took place.
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">severity</span> <span class="attributetype">string</span></div>
  The severity of the incident provided by the reporter/reporting agent
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">resolved_date</span> <span class="attributetype">timestamp</span></div>
   The date where this incident was resolved
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">backdated</span> <span class="attributetype">boolean</span></div>
  Indicates whether this incident was from a legacy system, or when this incident was created.
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">occ_lock</span> <span class="attributetype">integer</span></div>
  The value of occ_lock represents the current state of the occupancy lock in a given context. It's typically used to track whether a resource or space is currently occupied or available.
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">attributes*</span> <span class="attributetype">map</span></div>
 A map of customised attributes determined by the IMS configurator. For more information, you may refer to
 <a href="Attributes/attribute">here</a>
</div>
