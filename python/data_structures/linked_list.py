class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def print_list(self):
        output = ""
        cur_node = self.head
        while cur_node is not None:
            output += f"{cur_node['value']} "
            cur_node = cur_node["next"]
        print(output)

    def add_value(self, value):
        if self.head is None:
            self.head = self._create_node(value)
            self.tail = self.head
        else:
            self.tail["next"] = self._create_node(value)
            self.tail = self.tail["next"]

    def remove_value(self, value):
        while self.head is not None and self.head["value"] == value:
            self.head = self.head["next"]
        cur_node = self.head
        while cur_node is not None:
            if cur_node["value"] == value:
                cur_node["value"] = cur_node["next"]["value"]
                cur_node["next"] = cur_node["next"]["next"]
                continue
            cur_node = cur_node["next"]

    def _create_node(self, value):
        return {"value": value, "next": None}


my_list = LinkedList()

my_list.print_list()

my_list.add_value(2)

my_list.add_value(2)
my_list.add_value(1)
my_list.add_value(5)
my_list.add_value(2)
my_list.add_value(12)

my_list.print_list()
my_list.remove_value(2)
my_list.print_list()
