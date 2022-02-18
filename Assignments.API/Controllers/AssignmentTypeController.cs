
using BLL.Interfaces;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Assignments.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentTypeController : ControllerBase
    {
        IAssignmentTypeBL AssignmentTypeBL;
        public AssignmentTypeController(IAssignmentTypeBL _AssignmentTypeB)
        {
            AssignmentTypeBL = _AssignmentTypeB;
        }
        // GET: api/<AssignmentTypeController>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(AssignmentTypeBL.GetAllAssignmentType());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // GET api/<AssignmentTypeController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(AssignmentTypeBL.findById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // POST api/<AssignmentTypeController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] AssignmentType item)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                return Ok(await AssignmentTypeBL.addAssignmentType(item));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // PUT api/<AssignmentTypeController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] AssignmentType item)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                return Ok(await AssignmentTypeBL.UpdateAssignmentType(item));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // DELETE api/<AssignmentTypeController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await AssignmentTypeBL.DeleteAssignmentType(id);

                return StatusCode(Convert.ToInt32(HttpStatusCode.NoContent));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}


