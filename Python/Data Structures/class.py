# # print('Yoo')

# lottery_player = { 
#     'name':'Chucky',
#     'numbers':[2,3,4,5,78,90]
# }

# # print(lottery_player)

# class Lottery_player(object):
#     """docstring for Lottery_player"""
#     def __init__(self):
#        print(self)
#        self.name = 'name'
#        self.numbers = [32,43,89,43,54]
#        print(self.name)

#     def total(self):
#         return sum(self.numbers)

# player1 = Lottery_player()
# print(player1.total())

class Student(object):
    """docstring for Student"""
    def __init__(self, name,school):
        # self.args = args
        self.name = name
        self.school = school 
        self.marks = []
        # print(self)
        


# Chucky = Student('Chucky', 'Muk')
# Chucky.marks.append(56)
# Chucky.marks.append(36)
# Chucky.marks.append(16)
# Chucky.marks.pop()
# print(Chucky.marks)

class Store(object):
    """docstring for Store"""
    def __init__(self,name):
        self.name = name
        self.items = []

    def add_item(self,name,price):
        items_dict = {
            'name':self.name ,
            'price':self.price
        }
        self.items = self.items.append(items_dict)

    def stock_price(self):
        return sum([items_dict['price'] for item in self.items])
        

