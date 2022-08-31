import time
import math
import statistics
import random
import matplotlib.pyplot as plt


def binary_search(sorted_list, value):
    lower_index = 0
    upper_index = len(sorted_list) - 1

    while upper_index >= lower_index:
        time.sleep(0.00001)
        middle_index = math.floor((upper_index + lower_index) / 2)
        if sorted_list[middle_index] == value:
            return middle_index
        elif sorted_list[middle_index] < value:
            lower_index = middle_index + 1
        else:
            upper_index = middle_index - 1

    return -1


def linear_search(sorted_list, value):
    for i, val in enumerate(sorted_list):
        time.sleep(0.00001)
        if val == value:
            return i
    return -1


n = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
total_trials = 5
binary_search_plot = []
linear_search_plot = []

for trial in n:
    my_list = list(range(1, trial + 1))
    binary_search_times = []
    linear_search_times = []
    for i in range(0, total_trials):
        search_value = random.randint(1, trial)

        start = time.time()
        assert binary_search(my_list, search_value) == search_value - 1
        end = time.time()
        binary_search_times.append(end - start)

        start = time.time()
        assert linear_search(my_list, search_value) == search_value - 1
        end = time.time()
        linear_search_times.append(end - start)

    binary_search_plot.append(statistics.mean(binary_search_times))
    linear_search_plot.append(statistics.mean(linear_search_times))

plt.plot(n, binary_search_plot, color="red", marker="o", label="Binary Search")
plt.plot(n, linear_search_plot, color="blue", marker="o", label="Linear Search")
plt.title("Binary Search vs Linear Search", fontsize=14)
plt.xlabel("n", fontsize=14)
plt.ylabel("time", fontsize=14)
plt.grid(True)
plt.legend()
plt.show()
