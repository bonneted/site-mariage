from django import template

register = template.Library()

@register.filter(name='get_prog')
def get_prog(total, paye):
    return min(100,paye/total*94+6)