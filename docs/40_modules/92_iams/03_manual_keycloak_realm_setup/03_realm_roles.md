---
sidebar_position: 3
---

#	Realm Roles

IAMS require the following realm roles to be created:
*	realm-tenant-admin – role that can create tenant
*	tenant-admin – role that can administer role, group, resource, and resource permission in a tenant.
*	system-admin – role that can manage user and tenant in the realm. This role is a composite role that contain the realm-tenant-admin role. 

##	Create realm-tenant-admin Role

1.	Login to the Web Admin Console and navigate to the realm.

2.	Click on `Realm roles` on the side menu:

![Realm Roles](./images/03_realm_roles.png)   
 

3.	Click on `Create role` button
 
![Realm Roles](./images/03_create_role.png) 


4.	Enter the following for the role:

* Role name:	realm-tenant-admin


5.	Click on `Save` button to create

![Realm Roles](./images/03_create_role_form.png) 



## Create system-admin Role

1.	 Login to the Web Admin Console and navigate to the realm.


2.	Click on `Realm roles` on the side menu.

3.	Click on `Create role` button


6.	Enter the following for the role:
* Role name:	system-admin

4.	Click on `Save` button to create the role.

5.	Click on the `Action` dropdown menu on the right hand side of the screen and select `Add associated roles` submenu.
 
![Add Associated Roles](./images/03_add_associated_roles.png) 


6.	Check `realm-management realm-admin` from the list:

![Realm List](./images/03_realm_management_realm_admin.png) 

7.	Click on `Assign` button to assign selected roles to `system-admin` role:

![Assign to System admin](./images/03_assign_roles_system_admin.png) 


8.	Click on `Assign Role` button
 
![Assign to System admin](./images/03_assign_role.png) 


9.	Select `Filter by realm roles` from the filter
 
![Filter by realm roles](./images/03_filter_by_realm_roles.png) 


10.	Check `realm-tenant-admin` from the list
 
![Filter by realm roles](./images/03_realm_tenant_admin_role.png)

11.	Click on `Assign` button to complete the configuration.
 
![Filter by realm roles](./images/03_assign_system_admin.png) 


##	Create tenant-admin Role

1.	Login to the Web Admin Console and navigate to the realm.

2.	Click on `Realm roles` on the side menu.

3.	Click on `Create role` button

4.	Enter the following for the role:

Role name:	tenant-admin

5.	Click on `Save` button to create the role.
6.	Click on the `Action` dropdown menu on the right hand side of the screen and select `Add associated roles` submenu.

7.	Check `realm-management realm-admin` from the list.

8.	Click on `Assign` button to assign selected roles to `tenant-admin` role.

