#!/usr/bin/env python
# coding: utf-8

# In[21]:


import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn import tree


# In[37]:


df = pd.read_csv('salary.csv')


# In[38]:


df


# In[39]:


# columns = list(df.columns)
# print(columns)
# df
input = df.drop('salary', axis=1)
# print(input)
# input = df.pop('salary')


# In[40]:


input


# In[41]:


df


# In[42]:


target = df['salary']
print(target.head())


# In[43]:


le_company = LabelEncoder()
le_job = LabelEncoder()
le_degree = LabelEncoder()


# In[44]:


input['company'] = le_company.fit_transform(input['company'])
input['job'] = le_company.fit_transform(input['job'])
input['degree'] = le_company.fit_transform(input['degree'])


# In[45]:


print(target.head())


# In[47]:


model = tree.DecisionTreeClassifier()
model.fit(input.values,target)


# In[55]:


prediction = model.predict([[1,2,0]])


# In[56]:

if(prediction == 0):
	print("Salary Is Below 100k")
else:
	print("Salary Is Above 100k")
