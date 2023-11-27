#!/usr/bin/env python
# coding: utf-8

# In[39]:


import pandas as pd
import matplotlib.pyplot as plt
from sklearn import preprocessing
import seaborn as sns


# In[5]:


df = pd.read_csv('iris.csv')


# In[19]:


print(df.head())


# In[43]:


le = preprocessing.LabelEncoder()

df.species = le.fit_transform(df.species)
print(df.head())


# In[58]:


sns.scatterplot(data=df,x='sepal_length',y='sepal_width',hue='species')
plt.plot()
plt.legend(title="species",loc="upper left")
plt.title("Iris Dataset")
plt.show()

