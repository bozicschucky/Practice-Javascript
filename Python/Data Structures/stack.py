"""
Stack using list as storage.
"""

class stack:
    def __init__(self, *args, **kwargs):
        """
        Demon using a list as a storge for a stack
        """
        self.stack = []

    def isEmpty(self):
        """Determine whether stack is empty."""
        return len(self.stack) == 0 

    def push(self,v):
        """Push v onto the stack. 0(1) performance"""
        self.stack.append(v)

    def pop(self):
        """Remove the top most value and return it. O(1) performance """
        if self.isEmpty():
            raise Exception('Stack is empty')
        return self.stack.pop()

    def __repr__(self):
        """Show representation"""
        return "stack:" +str(self.stack)