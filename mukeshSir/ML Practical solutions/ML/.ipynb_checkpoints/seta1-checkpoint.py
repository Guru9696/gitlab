import seaborn as sns
import matplotlib.pyplot as plt

iris = sns.load_dataset("iris")

sns.scatterplot(x="sepal_lenght", y= "sepal_width",hue="species",data=iris)

plt.xlable("sepal length")
plt.ylable("sepal width")
plt.title("scatter plot of sepal length vs. sepal width")
plt.show()
